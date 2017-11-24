// Dependences
import React, { /* Component */ } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Assets
import logo from './images/clarovideo-logo-sitio.svg';
import './css/Header.css';

/**
 * stateless 'Header' component (pure function version)
 * @return {React.component} Header component
 */
const Header = props => <header className="Header">
    <div className="Header-logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="Menu">
      <ul>
        { props.items
          && props.items.map((item, key) => <li key={key}><Link to={ item.url }>{ item.title }</Link></li>)
        }
      </ul>
    </div>
  </header>

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Header;
