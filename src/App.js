import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header.component';
import CategoryList from './Components/CategoryList.component';
import Search from './Components/Search.component';
import AddAnegdot from './Components/AddAnegdot.component';
import AnegdotList from './Components/AnegdoteList.component';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [anegdots, setAnegdots] = useState([]);
  const [anegdot, setAnegdot] = useState('');
  const [anegdotCategory, setAnegdotCategory] = useState('');
  const [anegdotMessage, setAnegdotMessage] = useState('');
  const [anegdotCategoryMessage, setAnegdotCategoryMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [inputColor, setInputColor] = useState('');

  let modalDisplay = isModalVisible ? 'block' : 'none';

  useEffect(() => {
    function handleKeyDown() {
      window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          setIsModalVisible(false);
          clearMessages();
        }
      });
    }

    handleKeyDown();
  }, []);

  const addAnegdot = (anegdotObject) => {
    // update state: copy old anegdotes and add new one
    setAnegdots([...anegdots, anegdotObject]);

    // after 500ms close modal and clear the fields
    setTimeout(() => {
      // close modal
      setIsModalVisible(false);
      // clear fields
      setAnegdot('');
      setAnegdotCategory('');
    }, 500);
  }

  const clearMessages = () => {
    setAnegdotMessage('');
    setAnegdotCategoryMessage('');
    setInputColor('gray');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // create anegdot object
    // keys: text, category, likes
    const anegdotObj = {
      text: anegdot,
      category: anegdotCategory,
      likes: 0
    };

    // validate form
    if (!anegdot && !anegdotCategory) {
      setAnegdotMessage('Fill in this field');
      setAnegdotCategoryMessage('Fill in this field');
      setMessageColor('red');
      setInputColor('red');
    } 
    if (!anegdot) {
      setAnegdotMessage('Fill in this field');
      setMessageColor('red');
      setInputColor('red');
    }
    if (!anegdotCategory) {
      setAnegdotCategoryMessage('Fill in this field');
      setMessageColor('red');
      setInputColor('red');
    }
    
    if (anegdot && anegdotCategory) {
      addAnegdot(anegdotObj);
      clearMessages();
    }
  }

  const closeModal = () => {
    setIsModalVisible(false);
    clearMessages();
  }

  return (
    <div>
      <Header />
      <CategoryList
        handleHumorousClick={() => console.log('it works!')}
      />
      <Search 
        handleAddAnegdote={() => setIsModalVisible(true)}
      />
      <AddAnegdot
        modalDisplay={modalDisplay}
        handleModalClose={closeModal}
        handleAnegdotName={anegdot}
        handleAnegdotNameChange={(e) => setAnegdot(e.target.value)}
        handleAnegdotCategory={anegdotCategory}
        handleAnegdotCategoryChange={(e) => setAnegdotCategory(e.target.value)}
        handleSubmit={handleSubmit}
        anegdotMessage={anegdotMessage}
        categoryMessage={anegdotCategoryMessage}
        messageColor={messageColor}
        inputColor={inputColor}
      />
      <AnegdotList anegdots={anegdots} />
    </div>
  );
}

export default App;