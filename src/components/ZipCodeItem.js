import React from 'react';
import PropTypes from 'prop-types';
import {translations} from '../config/lang';

console.log(translations.en);
const ZipCodeItem = ({el, currentItem, selectItem, removeItem}) => (
  <div
    className="zipCodeCont_body_list_item"
    onClick={() => {
      selectItem(el);
    }}
    style={{backgroundColor: el._id === currentItem._id ? '#3dce78' : ''}}
  >
    <div className="itemLeft">
      <div className="zipCodeCont_body_list_item_logo">
        <img
          alt=""
          src="/static-files/help-Circle.png"
          className="zipCodeCont_body_list_item_logo_img"
        />
      </div>
      <div className="zipCodeCont_body_list_item_text noWrap">
        <span>
          {el.places[0]['place name']},{el.places[0]['state abbreviation']}
        </span>
      </div>
    </div>

    <div
      className="itemRemove"
      onClick={e => {
        removeItem(e, el);
      }}
    >
      Remove
    </div>
  </div>
);

export default ZipCodeItem;

ZipCodeItem.propTypes = {
  el: PropTypes.object,
  currentItem: PropTypes.object,
  selectItem: PropTypes.func,
  removeItem: PropTypes.func,
};

ZipCodeItem.defaultProps = {
  el: {},
  currentItem: {},
  selectItem: () => {},
  removeItem: () => {},
};
