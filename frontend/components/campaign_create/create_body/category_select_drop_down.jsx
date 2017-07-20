import React from 'react';

class CategorySelectDropdown extends React.Component {
  render() {
    const techCategories = [
      "Home",
      "Phones & Accessories",
      "Travel & Outdoors",
      "Health & Fitness",
      "Fashion & Wearables",
    ];

    const creativeCategories = [
      "Film",
      "Tabletop Games",
      "Music",
      "Art",
      "Food & Beverages",
    ];

    const techDivs = techCategories.map( (category, idx) => {
      return (
        <div key={idx} className="category-wrapper" onClick={() => this.props.setState({category})}>
          {category}
        </div>
      );
    });

    const creativeDivs = creativeCategories.map( (category, idx) => {
      return (
        <div key={idx} className="category-wrapper" onClick={() => this.props.setState({category})}>
          {category}
        </div>
      );
    });

    return (
      <div className="category-select-dropdown">
        <div className="tech-innovation-dd csdd-col">
          <h1 className="csdd-title">TECH & INNOVATION</h1>
          {techDivs}
        </div>
        <div className="creative-works-dd csdd-col">
          <h1 className="csdd-title">CREATIVE WORKS</h1>
          {creativeDivs}
        </div>
      </div>
    );
  }
}

export default CategorySelectDropdown;
