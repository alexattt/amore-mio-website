import React, { useState, useContext, memo } from 'react'
import Modal from 'react-modal';
import { langContext } from '../App';
import OrderForm from './OrderForm';
import { customFailStyles, customSuccessStyles, customStyles } from '../utils/styles';

Modal.setAppElement('#root');

const ShopItem = ({ itemData, language }) =>
{
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false)
  const [failDialogOpen, setFailDialogOpen] = useState(false)

  const translations = useContext(langContext);

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
        <img src={itemData.images[0]} />
        <div>
          <p style={{textAlign: "left", paddingLeft: "10px", textTransform: "uppercase", fontWeight: "700"}}>{itemData.itemName}</p>
        </div>
      </div>
    </>
  )
}

export default memo(ShopItem)