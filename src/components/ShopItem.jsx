import React, { useState, useContext } from 'react'
import Modal from 'react-modal';
import { langContext } from '../App';
import OrderForm from './OrderForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '90vw',
    height: '90vh',
    zIndex: '10100 !important',
    transform: 'translate(-50%, -50%)',
  },
};

const customSuccessStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '70vw',
    zIndex: '10100 !important',
    transform: 'translate(-50%, -50%)',
    border: "2px solid #80D377"
  },
};

const customFailStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '70vw',
    zIndex: '10100 !important',
    transform: 'translate(-50%, -50%)',
    border: "2px solid #FF5D5D"
  },
};

Modal.setAppElement('#root');

const ShopItem = ({ itemData, language }) =>
{
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false)
  const [failDialogOpen, setFailDialogOpen] = useState(false)

  const translations = useContext(langContext);

  const handleMouseOver = (event) =>
  {
    event.target.style.opacity = 1;
  }

  const handleMouseOut = (event) =>
  {
    event.target.style.opacity = 0;
  }

  const handleItemClick = () =>
  {
    setIsDialogOpen(true);
  }

  return (
    <>
      {successDialogOpen && (
        <div>
          <Modal
            isOpen={successDialogOpen}
            onRequestClose={() => setSuccessDialogOpen(false)}
            style={customSuccessStyles}
          // contentLabel="Example Modal"
          >
            <div className='flex-row' style={{ alignItems: 'baseline', justifyContent: 'space-between', textAlign: 'center' }}>
              <p style={{ fontWeight: '600' }}>{translations.orderForm['orderAccepted']}</p>
              <button className='custom-btn' onClick={() => setSuccessDialogOpen(false)}>close</button>
            </div>
          </Modal>
        </div>
      )}
      {failDialogOpen && (
        <div>
          <Modal
            isOpen={failDialogOpen}
            onRequestClose={() => setFailDialogOpen(false)}
            style={customFailStyles}
          >
            <div className='flex-row' style={{ alignItems: 'baseline', justifyContent: 'space-between', textAlign: 'center' }}>
              <p style={{ fontWeight: '600' }}>{translations.orderForm['orderDenied']}</p>
              <button className='custom-btn' onClick={() => setFailDialogOpen(false)}>close</button>
            </div>
          </Modal>
        </div>
      )}
      {isDialogOpen && (
        <div>
          <Modal
            isOpen={isDialogOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsDialogOpen(false)}
            style={customStyles}
          >
            <div className='flex-row' style={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
              <h3>{itemData.itemName}</h3>
              <button className='custom-btn' onClick={() => setIsDialogOpen(false)}>close</button>
            </div>
            <OrderForm
              itemData={itemData} language={language} setIsDialogOpen={setIsDialogOpen}
              setSuccessDialogOpen={setSuccessDialogOpen} setFailDialogOpen={setFailDialogOpen}
            />
          </Modal>
        </div>
      )}
      <div className='shop-item' onClick={handleItemClick}>
        <img src={itemData.images[0]} style={{ position: 'absolute' }} />
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='shop-item-details flex-column'
          style={{ opacity: 0, fontSize: '1rem', fontWeight: '500' }}
        >
          {itemData.itemName}
          <br />
          {itemData.itemPrice}€
          <br />
          <br />
          {itemData.availableSizes.join(" ")}
          <br />
        </div>
      </div>
    </>
  )
}

export default ShopItem