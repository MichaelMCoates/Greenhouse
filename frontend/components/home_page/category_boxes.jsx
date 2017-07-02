import React from 'react';
import {Link, hashHistory} from 'react-router';

class CategoryBoxes extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {

    return (
      <div className="category-boxes-div">
        <div className="explore-categories-header">
          Explore categories
        </div>
        <div className="box-container">
          <div className="box-container-row">
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
          </div>
          <div className="box-container-row">
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
            <div className="category-box">CATEGORY BOX</div>
          </div>
        </div>

      </div>
    );
  }
}

export default CategoryBoxes;
