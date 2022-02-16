import React from 'react';
import PropTypes from 'prop-types';
import Anegdot from './Anegdot.component';
import '../Styles/AnegdotList.styles.css';

const AnegdotList = ({ anegdots, onUpvote, }) => {
    return (
        <section style={{ backgroundColor: anegdots.length > 0 ? 'gray' : '' }} className='anegdot-list'>
            {anegdots.map(anegdot => {
                return (
                    <Anegdot
                        key={anegdot.id}
                        anegdot={anegdot}
                        onUpvote={onUpvote}
                    />
                );
            })}
        </section>
    );
}

AnegdotList.propTypes = {
    anegdots: PropTypes.array.isRequired
};

export default AnegdotList;