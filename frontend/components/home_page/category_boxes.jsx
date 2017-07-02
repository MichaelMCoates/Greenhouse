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

            <div className="category-box home">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Home</div>
            </div>

            <div className="category-box phones">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Phones & Accessories</div>
            </div>

            <div className="category-box travel">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Travel & Outdoors</div>
            </div>

            <div className="category-box film">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Film</div>
            </div>

            <div className="category-box art">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Art</div>
            </div>
          </div>

          <div className="box-container-row">
            <div className="category-box health">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Health & Fitness</div>
            </div>

            <div className="category-box fashion">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Fashion & Wearables</div>
            </div>

            <div className="category-box tabletop">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Tabletop Games</div>
            </div>

            <div className="category-box music">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Music</div>
            </div>

            <div className="category-box food">
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Food & Beverages</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CategoryBoxes;
