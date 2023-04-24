import React from 'react';
import { Carousel } from 'react-bootstrap';
import'./carsoule.scss'

 function carsoule (){

    return (
      <>
        <div className="car">
          <Carousel slide={false}>
            <Carousel.Item>
              <img src="./banner.jpg" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./banner3.jpg" alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );

}
export default carsoule;