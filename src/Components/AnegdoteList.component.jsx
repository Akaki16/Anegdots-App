import React from 'react';
import PropTypes from 'prop-types';
import Anegdot from './Anegdot.component';

const AnegdotList = ({ anegdots }) => {
    return (
        <section className='anegdot-list'>
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