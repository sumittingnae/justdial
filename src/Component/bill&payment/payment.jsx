import React from 'react';
import { Link } from 'react-router-dom';
import './payment.scss'

 function billpayment(){

    return (
      <>
        <div className="online">
          <div className="card">
            <div className="bill">
              <div className="content">
                <h5>Bills & Recharge</h5>
                <p>Pay your bills & recharge instantly with Justdial</p>
                <Link to="/billpayment" id="link">
                  Explore More
                </Link>
              </div>
              <div className="option">
                <div className="product">
                  <div className="online">
                    <div className="img">
                      <Link>
                        <img src="online.svg" alt="" />
                      </Link>
                    </div>
                    <p>Mobile</p>
                  </div>

                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="electricity.svg" alt="" />
                      </Link>
                    </div>
                    <p>electricity</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="dth.svg" alt="" />
                      </Link>
                    </div>
                    <p>DTH</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="water.svg" alt="" />
                      </Link>
                    </div>
                    <p>Water</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="gas.svg" alt="" />
                      </Link>
                    </div>
                    <p>Gas</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="insurance.svg" alt="" />
                      </Link>
                    </div>
                    <p>Insurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bill">
              <div className="content">
                <h5>Travel Bookings</h5>
                <p>Instant ticket bookings for your best travel experience</p>
                <Link to="/billpayment" id="link">
                  Explore More
                </Link>
              </div>
              <div className="option">
                <div className="product">
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="flight.svg" alt="" />
                      </Link>
                    </div>
                    <p>Flight Booking</p>
                  </div>

                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="bus.svg" alt="" />
                      </Link>
                    </div>
                    <p>Bus</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="train.svg" alt="" />
                      </Link>
                    </div>
                    <p>Train</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="hotels.svg" alt="" />
                      </Link>
                    </div>
                    <p>Hotel</p>
                  </div>
                  <div className="online">
                    <div className="img">
                      <Link to="/">
                        <img src="carhire.svg" alt="" />
                      </Link>
                    </div>
                    <p>Car Rentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default billpayment;