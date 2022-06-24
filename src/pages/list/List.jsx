import React from 'react';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import './list.scss'

function List() {
  return (
    <div className='list__page'>
      <Sidebar />
      <div className="list__container">
        <Navigation />
      </div>
    </div>
  )
}

export default List;