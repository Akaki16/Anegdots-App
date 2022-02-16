import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Header.styles.css';

const Header = ({ text }) => {
    return (
        // start of header
        <header className='header'>
            <h1 className='header-title'>{text}</h1>
        </header>
        // end of header
    );
}

Header.defaultProps = {
    text: 'Anegdotes App'
};

Header.propTypes = {
    text: PropTypes.string
};

export default Header;