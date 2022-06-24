import React from 'react';
import './single.scss';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';



function Single() {
  return (
    <div className='user__single__page'>
      <Sidebar />
      <div className="user__single__container">
        <Navigation />

        <div className="user__single__top">
          <div className="top__left__content">
            <div className="edit__button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="top__left__item">
              <img src="https://cdn.sei.org/wp-content/uploads/2019/09/jenny-han-e1568180419685-1352x1576.jpg" alt="" className="item__image" />
            
              <div className="top__left__detail">
                <h1 className="item__title">Jenny Yang</h1>
                <div className="item__detail">
                  <span className="item__key">Email:</span>
                  <span className="item__value">jenny_yang@gmail.com</span>
                </div>

                <div className="item__detail">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">+1 2345 567-89</span>
                </div>

                <div className="item__detail">
                  <span className="item__key">Address:</span>
                  <span className="item__value">Elton St. 234 Garden NY, NewYork</span>
                </div>

                <div className="item__detail">
                  <span className="item__key">Country:</span>
                  <span className="item__value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="top__right__content">
            <Chart title="The latest 6months Revenue" aspect={3/1} /> 
          </div>
        </div>

        <div className="user__single__bottom">
          <h1 className="bottom__title">Customer Tracking</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single;