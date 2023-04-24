import React from 'react';
import Header from '../../Component/header/header';
import './Home.scss'
import Carsoule from '../../Component/carsoule/carsoule';
import Product from '../../Component/Product/product';
import ProductList from '../../Component/G-productList/productList';
import Payment from '../../Component/bill&payment/payment'
import Review from '../../Component/review/review';

export default function Home (){

    return (
      <>
        <Header />
        <div className="home">
          <Carsoule />
          <div className="container">
            <div className="card">
              <div className="img">
                <img src="./v.jpg" alt="" />
              </div>
            </div>

            <div className="card">
              <div className="img">
                <img src="./v.jpg" alt="" />
              </div>
            </div>

            <div className="card">
              <div className="img">
                <img src="./v.jpg" alt="" />
              </div>
            </div>

            <div className="card">
              <div className="img">
                <img src="./v.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Product />
        <ProductList/>
        <Payment/>
        <Review/>
      </>
    );

}