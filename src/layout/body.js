import React, { Component } from 'react';
import Banner from './banner';
import Item from './item';

class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 ">
              <Item/>

            </div>
            <div className="col-lg-3 ">
              <Item />

            </div>
            <div className="col-lg-3 ">
              <Item />

            </div>
            <div className="col-lg-3">
              <Item />

            </div>     
          </div>
          </div>
        
      </div>
    );
  }
}

export default Body;
