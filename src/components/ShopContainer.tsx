import React, { useContext, useState } from 'react'
import { langContext } from '../App';
import { ShopItemModel } from '../models/ShopItemModel';
import SideTitle from './shared-components/SideTitle'
import ShopItem from './ShopItem';
import ReactPaginate from 'react-paginate';
import { useWindowSize } from '../helpers';

const ShopContainer = ({ language }: { language: string }) => {
  const translations = useContext(langContext);
  const [itemOffset, setItemOffset] = useState(0);
  const size = useWindowSize();

  var itemsPerPage = 6;

  if (size.width < 1024) {
    itemsPerPage = 1;
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = translations.shopDetails['shopItems'].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(translations.shopDetails['shopItems'].length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % translations.shopDetails['shopItems'].length;
    setItemOffset(newOffset);
  };

  return (
    <div id='shop' className={size.width < 1024 ? 'flex-column' : 'flex-row'} style={{ justifyContent: "space-between" }}>
      {size.width < 1024 && <div className='flex-row' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p className='horizontal-title' style={{ color: 'black' }}>{translations.shopDetails['sideTitle']}</p>
      </div>}
      <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div className='shop-items'>
          {currentItems.map((item: ShopItemModel) => {
            return <ShopItem itemData={item} language={language} />
          })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={itemsPerPage}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />
      </div>
      {size.width > 1024 && <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SideTitle title={translations.shopDetails['sideTitle']} />
      </div>}
    </div>
  )
}

export default ShopContainer