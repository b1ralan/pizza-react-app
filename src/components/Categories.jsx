import React from 'react';
import PropTypes from "prop-types";


const Categories = React.memo(({activeCategory, items, onClickCategory}) => {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
        {items && items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(index)}
          >{name}</li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number,null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: '',
  items: [],
};


export default Categories;