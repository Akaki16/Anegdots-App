import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/CategoryList.styles.css';

const CategoryList = ({
    handleHumorousClick,
    handleReminiscentClick,
    handlePhilosophicalClick,
    handleCautionaryClick,
    handleInspirationalClick
}) => {
    return (
        // start of section
        <section className='category-list'>
            <button onClick={handleHumorousClick} className='category-btn' type='button'>
                Humorous
            </button>
            <button onClick={handleReminiscentClick} className='category-btn' type='button'>
                Reminiscent
            </button>
            <button onClick={handlePhilosophicalClick} className='category-btn' type='button'>
                Philosophical
            </button>
            <button onClick={handleCautionaryClick} className='category-btn' type='button'>
                Cautionary
            </button>
            <button onClick={handleInspirationalClick} className='category-btn' type='button'>
                Inspirational
            </button>
        </section>
        // end of section
    );
}

CategoryList.propTypes = {
    handleHumorousClick: PropTypes.func.isRequired,
    handleReminiscentClick: PropTypes.func.isRequired,
    handlePhilosophicalClick: PropTypes.func.isRequired,
    handleCautionaryClick: PropTypes.func.isRequired,
    handleInspirationalClick: PropTypes.func.isRequired
};

export default CategoryList;