import React from 'react';
import './review.scss'

 function review(){

    return (
      <div className="review">
        <div className="cards">
          <div className="title">
            <h4>Recent Activity</h4>
          </div>
          <div className="content">
            <div className="img">
              <img
                src="https://images.jdmagicbox.com/comp/nagpur/w6/0712px712.x712.230218170136.j5w6/catalogue/-nnt98vx61r.jpg"
                alt=""
              />
            </div>
            <div className="title">
              <h5>Wainganga Support System</h5>
              <p>Jamtha-Nagpur</p>
            </div>
          </div>
        </div>
      </div>
    );

}
export default review;