import React, { Component } from 'react';
import './item.css'
import Item1 from "../asset/img/Item1.jpg";

class Item extends Component {
    render() {
        return (
          <div>
          <div className="container " >
              <div className="card"  >
                  <img src={Item1} alt="" />
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary ">Go somewhere</a>
                  </div>
              </div>
          </div>
      </div>
        );
    }
}

export default Item;