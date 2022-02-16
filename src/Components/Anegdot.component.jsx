import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Anegdot.styles.css';

const Anegdot = ({ anegdot, onUpvote, }) => {
    const { text, likes, category } = anegdot;
    return (
        <div className='anegdot'>
            <p>{text}</p>
            <h4>Category: {category}</h4>
            <div className='anegdot-container'>
                <h4>Likes: {likes}</h4>
                <button onClick={() => onUpvote(anegdot.id)} type='button'>
                    Like
                </button>
            </div>
        </div>
    );
}

Anegdot.propTypes = {
    anegdot: PropTypes.object.isRequired
};

export default Anegdot;