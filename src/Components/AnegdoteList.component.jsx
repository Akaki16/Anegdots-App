import React from 'react';
import PropTypes from 'prop-types';
import Anegdot from './Anegdot.component';
import '../Styles/AnegdotList.styles.css';

const AnegdotList = ({ anegdots }) => {
    return (
        <section style={{ backgroundColor: anegdots.length > 1 ? 'gray' : '' }} className='anegdot-list'>
            {anegdots.map(anegdot => {
                return (
                    <Anegdot anegdot={anegdot} />
                );
            })}
        </section>
    );
}

AnegdotList.propTypes = {
    anegdots: PropTypes.array.isRequired
};

export default AnegdotList;