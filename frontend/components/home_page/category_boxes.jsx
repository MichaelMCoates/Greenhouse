import React from 'react';
import {Link, hashHistory, withRouter} from 'react-router';

class CategoryBoxes extends React.Component {
  constructor(props) {
    super(props);
  }

  urlUpdate(category) {
    let queryString = `?category=${category}`;
    this.props.router.replace({ pathname: `/search${queryString}`});
  }

  render () {

    return (
      <div className="category-boxes-div">
        <div className="explore-categories-header">
          Explore categories
        </div>
        <div className="box-container">
          <div className="box-container-row">

            <div className="category-box home" onClick={() => this.urlUpdate('Home')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Home</div>
            </div>

            <div className="category-box phones" onClick={() => this.urlUpdate('Phones & Accessories')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Phones & Accessories</div>
            </div>

            <div className="category-box travel" onClick={() => this.urlUpdate('Travel & Outdoors')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Travel & Outdoors</div>
            </div>

            <div className="category-box film" onClick={() => this.urlUpdate('Film')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Film</div>
            </div>

            <div className="category-box art" onClick={() => this.urlUpdate('Art')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Art</div>
            </div>
          </div>

          <div className="box-container-row">
            <div className="category-box health" onClick={() => this.urlUpdate('Health & Fitness')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Health & Fitness</div>
            </div>

            <div className="category-box fashion" onClick={() => this.urlUpdate('Fashion & Wearables')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Fashion & Wearables</div>
            </div>

            <div className="category-box tabletop" onClick={() => this.urlUpdate('Tabletop Games')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Tabletop Games</div>
            </div>

            <div className="category-box music" onClick={() => this.urlUpdate('Music')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Music</div>
            </div>

            <div className="category-box food" onClick={() => this.urlUpdate('Food & Beverages')}>
              <div className="cat-box-bg"/>
              <div className="cat-box-title">Food & Beverages</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(CategoryBoxes);
