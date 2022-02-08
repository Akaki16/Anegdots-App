import React from 'react';
import PropTypes from 'prop-types';

const Anegdot = ({ anegdot }) => {
    const { text, likes, category } = anegdot;
    return (
        <div className='anegdote'>
            <article>
                <p>{text}</p>
            </article>
            <div className='anegdote-container'>
                <h3>Category: {category}</h3>
                <h3>Likes: {likes}</h3>
                <button type='button'>
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