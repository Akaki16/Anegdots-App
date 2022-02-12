import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/AddAnegdote.styles.css';

const AddAnegdote = ({
    handleModalClose,
    modalDisplay,
    handleAnegdotName,
    handleAnegdotNameChange,
    handleAnegdotCategory,
    handleAnegdotCategoryChange,
    handleSubmit,
    anegdotMessage,
    categoryMessage,
    messageColor,
    inputColor
}) => {
    return (
        // start of modal div
        <div style={{ display: modalDisplay }} className='modal'>
            {/* start of modal content div */}
            <div className='modal-content'>
                {/* start of modal header div */}
                <div className='modal-header'>
                    <h2>Add Anegdot</h2>
                    <i onClick={handleModalClose} className="fas fa-times-circle fa-2x"></i>
                </div>
                {/* end of modal header div */}
                <br />
                <hr />
                <br />
                {/* start of modal body div */}
                <div className='modal-body'>
                    {/* start of form */}
                    <form onSubmit={handleSubmit} className='add-form'>
                        <div className='form-group'>
                            <label htmlFor='anegdote'>Anegdot</label>
                            <textarea
                                style={{ border: `2px solid ${inputColor}` }}
                                htmlFor='anegdote'
                                id='anegdote'
                                placeholder='Enter the anegdot'
                                autoComplete='off'
                                value={handleAnegdotName}
                                onChange={handleAnegdotNameChange}
                            />
                            <small style={{ margin: '5px', color: messageColor }}>{anegdotMessage}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="category">Category</label>
                            <select style={{ border: `2px solid ${inputColor}` }} autoComplete='off' htmlFor="category" value={handleAnegdotCategory}onChange={handleAnegdotCategoryChange}>
                                <option value="">Choose category</option>
                                <option value="humorous">Humorous</option>
                                <option value="reminiscent">Reminiscent</option>
                                <option value="philosophical">Philosophical</option>
                                <option value="cautionary">Cautionary</option>
                                <option value="cautionary">Cautionary</option>
                                <option value="inspirational">Inspirational</option>
                            </select>
                            <small style={{ margin: '5px', color: messageColor }}>{categoryMessage}</small>
                        </div>
                        <div className='form-group'>
                            <button type='submit'>
                                Submit
                            </button>
                            <button onClick={handleModalClose} type='button'>
                                Close
                            </button>
                        </div>
                    </form>
                    {/* end of form */}
                </div>
                {/* end of modal body div */}
            </div>
            {/* end of modal content div */}
        </div>
        // end of modal div
    );
}

AddAnegdote.defaultProps = {
    modalDisplay: 'none',
};

AddAnegdote.propTypes = {
    handleAnegdotName: PropTypes.string.isRequired,
    handleAnegdotNameChange: PropTypes.func.isRequired,
    handleAnegdotCategory: PropTypes.string.isRequired,
    handleAnegdotCategoryChange: PropTypes.func.isRequired
};

export default AddAnegdote;