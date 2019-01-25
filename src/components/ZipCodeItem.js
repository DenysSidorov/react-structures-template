import React from 'react';
import PropTypes from 'prop-types';
import {LangConsumer} from '../contexts/lang';
// import langState from '../config/lang';

const ZipCodeItem = ({el, currentItem, selectItem, removeItem, langState}) => {
  console.log('');
  return (
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
        {langState.translate('Remove')}
      </div>
    </div>
  );
};

const wrapper = props => (
  <LangConsumer>{langState => <ZipCodeItem langState={langState} {...props} />}</LangConsumer>
);

export default wrapper;

ZipCodeItem.propTypes = {
  langState: PropTypes.object,
  el: PropTypes.object,
  currentItem: PropTypes.object,
  selectItem: PropTypes.func,
  removeItem: PropTypes.func,
};

ZipCodeItem.defaultProps = {
  langState: {},
  el: {},
  currentItem: {},
  selectItem: () => {},
  removeItem: () => {},
};
