import React, { PropTypes } from 'react';
import './styles/styles.less';

const DescriptionInfo = props => (
  <div className='wrapp description-info'>
    <header>
      <h2>
        <label htmlFor='input-description'>Description</label>
      </h2>
    </header>
    <input
      type='text'
      className='text-input'
      defaultValue={props.name}
      disabled='disabled'
    />
  </div>
);

DescriptionInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DescriptionInfo;
