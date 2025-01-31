/* eslint-disable no-unused-vars */
import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import Product from './../../../../frontend/src/Pages/Product';
import package_order_icon from '../../assets/package_order.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>

        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>

        </Link>
        <Link to={'/orders'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={package_order_icon} alt="" />
            <p>Orders</p>
        </div>

        </Link>
    </div>
  )
}

export default Sidebar