import React, { useContext, useState } from 'react'
import { langContext } from '../App';
import { ShopItemModel } from '../models/ShopItemModel';
import SideTitle from './shared-components/SideTitle'
import ShopItem from './ShopItem';
import ReactPaginate from 'react-paginate';

const ShopContainer = ({ language }: { language: string }) => {
  const translations = useContext(langContext);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 6;
  const currentItems = translations.shopDetails['shopItems'].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(translations.shopDetails['shopItems'].length / 6);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 6) % translations.shopDetails['shopItems'].length;
    setItemOffset(newOffset);
  };

  return (
    <div id='shop' className='flex-row' style={{ justifyContent: "space-between" }}>
      <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '80vw', width: '80vw' }}>
          {currentItems.map((item: ShopItemModel) => {
            return <ShopItem itemData={item} language={language} />
          })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />
      </div>
      <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SideTitle title={translations.shopDetails['sideTitle']} />
      </div>
    </div>
  )
}

export default ShopContainer