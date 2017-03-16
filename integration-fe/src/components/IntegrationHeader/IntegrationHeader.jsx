import React, { PropTypes } from 'react';
import config from '../../js/config.service';
import '../../styles/main.less';
import './styles/styles.less';

const IntegrationHeader = ({ showSubTitle }) => (
  <div className='wrapper integration-header'>
    <header>
      <figure>
        <img src={`../../img/${config.logo}`} alt={config.app_subtitle} />
      </figure>
      <h2>{config.app_subtitle}</h2>
    </header>
    {
      showSubTitle && (
        <div className='sub-title'>
          {config.app_subtitle}
        </div>
      )
    }
  </div>
);

IntegrationHeader.propTypes = {
  showSubTitle: PropTypes.bool,
};

IntegrationHeader.defaultProps = {
  showSubTitle: false,
};

export default IntegrationHeader;
