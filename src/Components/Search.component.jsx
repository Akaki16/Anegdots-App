import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.styles.css';

const Search = ({
    handleAnegdoteName,
    handleAnegdoteNameChange,
    handleAddAnegdote
}) => {
    return (
        // start of section
        <section className='search'>
            {/* start of form */}
            <form className='search-form'>
                <input
                    type='text'
                    placeholder='Type a search query'
                    autoComplete='off'
                    value={handleAnegdoteName}
                    onChange={handleAnegdoteNameChange}
                />
            </form>
            {/* end of form */}
            <button onClick={handleAddAnegdote} type='button'>
                Add Anegdote <i className="fas fa-plus-circle"></i>
            </button>
        </section>
        // end of section
    );
}

Search.propTypes = {
    handleAnegdoteName: PropTypes.string.isRequired,
    handleAnegdoteNameChange: PropTypes.func.isRequired,
    handleAddAnegdote: PropTypes.func.isRequired
};

export default Search;