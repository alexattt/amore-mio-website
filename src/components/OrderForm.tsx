import React, { useContext, useRef, useState } from 'react'
import { ShopItemModel } from '../models/ShopItemModel'
import Carousel from 'react-multi-carousel';
import { Button, Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import Modal from 'react-modal';
import { langContext } from '../App';
import emailjs from '@emailjs/browser';

const responsive = {
  all: {
    breakpoint: { max: 6000, min: 0 },
    items: 1
  }
};

Modal.setAppElement('#root');

const OrderForm = (
  { itemData, language, setIsDialogOpen, setSuccessDialogOpen, setFailDialogOpen }:
    { itemData: ShopItemModel; language: string; setIsDialogOpen: any; setSuccessDialogOpen: any; setFailDialogOpen: any }) => {
  const orderFormRef = useRef<any>();
  const formIsValid = useRef(false)

  const translations = useContext(langContext);
  const [contactType, setContactType] = useState(translations.orderForm['contactTypes'][0])
  const [itemAmount, setItemAmount] = useState(1)
  const [emailInputError, setEmailInputError] = useState({ showMsg: false, msg: "" })
  const [phoneNumInputError, setPhoneNumInputError] = useState({ showMsg: false, msg: "" })
  const [usernameInputError, setUsernameInputError] = useState({ showMsg: false, msg: "" })

  const handleContactTypeChange = (event: any) => {
    setContactType(event.target.value)
  }

  const handleItemAmountChange = (event: any) => {
    setItemAmount(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var contactDetails: any;

    if (contactType === "e-mail" || contactType === "e-pastā") {
      const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (event.target.emailInput.value !== "" && expression.test(event.target.emailInput.value)) {
        setEmailInputError({ showMsg: false, msg: "" })
        formIsValid.current = true
        contactDetails = event.target.emailInput.value
      }
      if (!expression.test(event.target.emailInput.value)) {
        setEmailInputError({ showMsg: true, msg: translations.orderFormValidation['emailInvalid'] })
        formIsValid.current = false
      }
      if (event.target.emailInput.value === null || event.target.emailInput.value === undefined || event.target.emailInput.value === "") {
        setEmailInputError({ showMsg: true, msg: translations.orderFormValidation['emptyField'] })
        formIsValid.current = false
      }
    }

    if (contactType.includes('WhatsApp')) {
      const expression: RegExp = /^\d+$/;

      if (event.target.phoneNumberInput.value !== "" && expression.test(event.target.phoneNumberInput.value)) {
        setPhoneNumInputError({ showMsg: false, msg: "" })
        formIsValid.current = true
        contactDetails = event.target.phoneNumberInput.value
      }
      if (!expression.test(event.target.phoneNumberInput.value)) {
        setPhoneNumInputError({ showMsg: true, msg: translations.orderFormValidation['phoneNumberInvalid'] })
        formIsValid.current = false
      }
      if (event.target.phoneNumberInput.value === null || event.target.phoneNumberInput.value === undefined || event.target.phoneNumberInput.value === "") {
        setPhoneNumInputError({ showMsg: true, msg: translations.orderFormValidation['emptyField'] })
        formIsValid.current = false
      }
    }

    if (contactType === "Instagram") {
      if (event.target.usernameInput.value !== "") {
        setUsernameInputError({ showMsg: false, msg: "" })
        formIsValid.current = true
        contactDetails = event.target.usernameInput.value
      }
      if (event.target.usernameInput.value === null || event.target.usernameInput.value === undefined || event.target.usernameInput.value === "") {
        setUsernameInputError({ showMsg: true, msg: translations.orderFormValidation['emptyField'] })
        formIsValid.current = false
      }
    }

    if (formIsValid.current) {

      var templateParams = {
        itemName: itemData.itemName,
        parameters: `${event.target.sizeSelect.value}/${event.target.colorSelect.value}`,
        comments: event.target.comments.value,
        itemAmount: itemAmount,
        orderSum: itemData.itemPrice * itemAmount,
        contactType: event.target.contactTypeSelect.value,
        contactDetails: contactDetails,
        clientLang: language
      };

      // setIsDialogOpen(false)
      // setSuccessDialogOpen(true)

      emailjs.send(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, templateParams, import.meta.env.VITE_PUBLIC_KEY)
        .then(function (response) {
          // console.log('SUCCESS!', response.status, response.text);
          setIsDialogOpen(false)
          setSuccessDialogOpen(true)
        }, function (error) {
          // console.log('FAILED...', error);
          setIsDialogOpen(false)
          setFailDialogOpen(true)
        });
    }
  }

  var carouselImages = itemData.images.slice(1,);

  return (
    <>
      <div id='order-form' className='flex-row' style={{ marginTop: '20px', gap: '20px' }}>
        <div style={{ width: '50%' }}>
          <Carousel responsive={responsive}>
            {carouselImages.map((image, index) => {
              return <img key={index} src={image} alt="" />
            })}
          </Carousel>
        </div>
        <div style={{ width: '50%' }}>
          <Form innerRef={orderFormRef} onSubmit={handleSubmit} className='flex-column' style={{ gap: '20px' }}>
            <FormGroup className='flex-column'>
              <Label for="sizeSelect">
                {translations.orderForm['selectSize']}
              </Label>
              <Input
                id="sizeSelect"
                name="sizeSelect"
                type="select"
                height="150px"
                required
              >
                {itemData.availableSizes.map((item) => {
                  return <option>{item}</option>
                })}
              </Input>
            </FormGroup>
            <FormGroup className='flex-column'>
              <Label for="colorSelect">
                {translations.orderForm['selectColor']}
              </Label>
              <Input
                id="colorSelect"
                name="colorSelect"
                type="select"
                required
              >
                {itemData.availableColors.map((item) => {
                  return <option>{item}</option>
                })}
              </Input>
            </FormGroup>
            <FormGroup className='flex-column'>
              <Label for="amountSelect">
                {translations.orderForm['selectAmount']}
              </Label>
              <Input
                id="amountSelect"
                name="amountSelect"
                type="select"
                onChange={handleItemAmountChange}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup className='flex-column'>
              <Label for="comments">
                {translations.orderForm['comments']}
              </Label>
              <Input
                id="comments"
                name="comments"
                type="textarea"
              />
            </FormGroup>
            <FormGroup className='flex-row' style={{ gap: '5px' }}>
              <Label for="contactTypeSelect">
                {translations.orderForm['contactType']}
              </Label>
              <Input
                id="contactTypeSelect"
                name="contactTypeSelect"
                type="select"
                onChange={handleContactTypeChange}
                required
              >
                {translations.orderForm['contactTypes'].map((item: string) => {
                  return <option>{item}</option>
                })}
              </Input>
            </FormGroup>
            {(contactType === "e-pastā" || contactType === "e-mail") && <FormGroup className='flex-column'>
              <Label for="emailInput">
                {translations.orderForm['inputEmail']}
              </Label>
              <Input
                id="emailInput"
                name="emailInput"
                type="text"
              >
              </Input>
              {emailInputError.showMsg && <FormFeedback style={{ fontSize: '12px', color: 'red' }}>
                {emailInputError.msg}
              </FormFeedback>}
            </FormGroup>}
            {(contactType.includes('WhatsApp')) && <FormGroup className='flex-column'>
              <Label for="phoneNumberInput">
                {translations.orderForm['inputPhoneNum']}
              </Label>
              <Input
                id="phoneNumberInput"
                name="phoneNumberInput"
                type="text"
              >
              </Input>
              {phoneNumInputError.showMsg && <FormFeedback style={{ fontSize: '12px', color: 'red' }}>
                {phoneNumInputError.msg}
              </FormFeedback>}
            </FormGroup>}
            {(contactType === "Instagram") && <FormGroup className='flex-column'>
              <Label for="usernameInput">
                {translations.orderForm['inputInstaUsername']}
              </Label>
              <Input
                id="usernameInput"
                name="usernameInput"
                type="text"
              >
              </Input>
              {usernameInputError.showMsg && <FormFeedback style={{ fontSize: '12px', color: 'red' }}>
                {usernameInputError.msg}
              </FormFeedback>}
            </FormGroup>}
            <FormText style={{ fontSize: '16px', fontWeight: '600' }}>Total order sum: {itemData.itemPrice * itemAmount}€</FormText>
            <Button className='custom-btn' style={{ fontSize: '16px' }} type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default OrderForm