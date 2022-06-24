import React from 'react';
import './user.scss';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";




function User() {
  return (
    <div className='users__page'>
      <Sidebar />
      <div className="users__container">
        <Navigation />

        <div className="user__content__top">
          <h1>All Users</h1>
          <Link to="/users/new" className='btn__create'>
            <FiPlus />
            Add New
          </Link>
        </div>
        
        <Datatable />
      </div>
    </div>
  )
}

export default User;