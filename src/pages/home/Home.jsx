import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './home.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <Sidebar />
      <div className="home__container">
        <Navigation />
        <div className="widgets">
          <Widget type="user" />

          <Widget type="order" />

          <Widget type="shipping" />

          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />

          <Chart title="Last 6 Months (Revenue)" aspect={3/1}/>
        </div>

        <div className="list__container">
          <div className="list__title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home;