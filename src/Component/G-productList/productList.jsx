import React from 'react';
import './productList.scss'
 function productList(){

    return (
      <>
        <div className="prodList">
          <div className="cards">
            <div className="List">
              <p>Wedding Requisites</p>
              <div className="image">
                <div className="img">
                  <img src="./hall.jpg" alt="1" />
                  <p>Banquet Halls</p>
                </div>
                <div className="img">
                  <img src="./beuty.jpg" alt="1" />
                  <p>Bridal Requisite</p>
                </div>
                <div className="img">
                  <img src="./caterers.jpg" alt="1" />
                  <p>Caterers</p>
                </div>
              </div>
            </div>

            {/* Beuty & Spa */}
            <div className="List">
              <p>Beauty & Spa</p>
              <div className="image">
                <div className="img">
                  <img src="./parlour.jpg" alt="1" />
                  <p>Beauty Parlour</p>
                </div>
                <div className="img">
                  <img src="./spamassage.jpg" alt="1" />
                  <p>Spa & Message</p>
                </div>
                <div className="img">
                  <img src="./salons.jpg" alt="1" />
                  <p>Salons</p>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="List">
              <p>Reaparing & Servises</p>
              <div className="image">
                <div className="img">
                  <img src="./acrepair.jpg" alt="1" />
                  <p>Ac Service</p>
                </div>
                <div className="img">
                  <img src="./carservice.jpg" alt="1" />
                  <p>Car Service</p>
                </div>
                <div className="img">
                  <img src="./bikeservice.jpg" alt="1" />
                  <p>Bike Service</p>
                </div>
              </div>
            </div>

            {/* daily needs */}

            <div className="List">
              <p>Daily Needs</p>
              <div className="image">
                <div className="img">
                  <img src="./movies.jpg" alt="1" />
                  <p>Movies</p>
                </div>
                <div className="img">
                  <img src="./grocery.jpg" alt="1" />
                  <p>Grocery</p>
                </div>
                <div className="img">
                  <img src="./electrician.jpg" alt="1" />
                  <p>Electricians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    }
export default productList;