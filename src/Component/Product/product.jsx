import React from 'react';
import './product.scss'
import {Link} from 'react-router-dom';
 function product(){

    return (
      <>
        <div className="products">
          <div className="container">
            <div className="pro-box">
              <div className="img">
                <Link to="/restro">
                  <img src="./restaurant.svg" alt="" />
                </Link>
              </div>
              <p>Restaurants</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/hotel">
                  <img src="./hotel.svg" alt="" />
                </Link>
              </div>
              <p>Hotels</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/auto">
                  <img src="./automobile.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Automobile</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/home">
                  <img src="./home.svg" alt="" id="small" />
                </Link>
              </div>
              <p>HomeDecore</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/education">
                  <img src="./education.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Education</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/rent&hire">
                  <img src="./renthire.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Rent & Hire</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/hospital">
                  <img src="./hospital.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Hospital</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/contractor">
                  <img src="./contractor.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Contractor</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/pshops">
                  <img src="./pet_shops.svg" alt="" id="small" />
                </Link>
              </div>
              <p>PetShops</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/hostel">
                  <img src="./hostels.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Hostal</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/eagent">
                  <img src="./estate-agent.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Estate Agent</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/dentist">
                  <img src="./dentist.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Dentist</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/gym">
                  <img src="./gym.svg" alt="" id="small" />
                </Link>
              </div>
              <p>gym</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/consul">
                  <img src="./consultants.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Consultants</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/event">
                  <img src="./event.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Event</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/dschool">
                  <img src="./driving_school.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Driving Schools </p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/packers">
                  <img src="./packers_movers.svg" alt="" id="small" />
                </Link>
              </div>
              <p>Packers & Movers</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/courier">
                  <img src="./courier.svg" alt="" />
                </Link>
              </div>
              <p>courier</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/travel">
                  <img src="./travel.svg" alt="" />
                </Link>
              </div>
              <p>Travel</p>
            </div>
            <div className="pro-box">
              <div className="img">
                <Link to="/travel">
                  <img src="./hotel.svg" alt="" />
                </Link>
              </div>
              <p>Hotels</p>
            </div>
          </div>
        </div>
      </>
    );

}
export default product;