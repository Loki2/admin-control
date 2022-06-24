import React from 'react';
import './product.scss';
import Navigation from '../../components/layouts/navigation/Navigation';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import Table from '../../components/table/Table';
import { FiPlus } from 'react-icons/fi';
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className='product__page'>
      <Sidebar />
      <div className="product__container">
        <Navigation />
        <div className="product__content__top">
          <h1>All Products</h1>
          <Link to="/products/new" className='btn__create'>
            <FiPlus />
            Add New
          </Link>
        </div>

        <div className="product__content__bottom">
          <Table />
        </div>
      </div>    
    </div>
  )
}

export default Product;