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
    handleSubmit
}) => {
    return (
        // start of modal div
        <div style={{ display: modalDisplay }} className='modal'>
            {/* start of modal content div */}
            <div className='modal-content'>
                {/* start of modal header div */}
                <div className='modal-header'>
                    <h2>Add Anegdote</h2>
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
                            <label htmlFor='anegdote'>Anegdote</label>
                            <textarea
                                htmlFor='anegdote'
                                id='anegdote'
                                placeholder='Enter the anegdote'
                                autoComplete='off'
                                value={handleAnegdotName}
                                onChange={handleAnegdotNameChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="category">Category</label>
                            <select autoComplete='off' htmlFor="category" value={handleAnegdotCategory}onChange={handleAnegdotCategoryChange}>
                                <option value="">Choose category</option>
                                <option value="humorous">Humorous</option>
                                <option value="reminiscent">Reminiscent</option>
                                <option value="philosophical">Philosophical</option>
                                <option value="cautionary">Cautionary</option>
                                <option value="cautionary">Cautionary</option>
                                <option value="inspirational">Inspirational</option>
                            </select>
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
    modalDisplay: 'none'
};

AddAnegdote.propTypes = {
    handleAnegdotName: PropTypes.string.isRequired,
    handleAnegdotNameChange: PropTypes.func.isRequired,
    handleAnegdotCategory: PropTypes.string.isRequired,
    handleAnegdotCategoryChange: PropTypes.func.isRequired
};

export default AddAnegdote;