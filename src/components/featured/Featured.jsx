import React from 'react';
import './featured.scss';
import { MdOutlineMoreVert, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp  } from 'react-icons/md';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



const Featured = () => {
  return (
    <div className='featured__container'>
      <div className="featured__top">
        <h1 className="title">Total Revenue</h1>
        <MdOutlineMoreVert className='featured__top__icon' />  
      </div>

      <div className="featured__content">
        <div className="featured__chart">
          <CircularProgressbar value={79} text={"79%"} strokeWidth={5} />
        </div> 

        <p className="title">Total shippings today</p>
        <p className="amount">$453.304,00</p>
        <p className="desc">
          Previous transactions processing. Last Shipping payments may not be included
        </p>

        <div className="summary">
          <div className="item">
            <div className="item__title">Target</div>
            <div className="item__result positive">
              <MdOutlineKeyboardArrowUp className='item__result__icon' />
              <div className="result__amount">$12,5k</div>
            </div>
          </div>

          <div className="item">
            <div className="item__title">Last Week</div>
            <div className="item__result negative">
              <MdOutlineKeyboardArrowDown className='item__result__icon' />
              <div className="result__amount">$12,5k</div>
            </div>
          </div>

          <div className="item">
            <div className="item__title">Last Month</div>
            <div className="item__result positive">
              <MdOutlineKeyboardArrowUp className='item__result__icon' />
              <div className="result__amount">$12,5k</div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Featured