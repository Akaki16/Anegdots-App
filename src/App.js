import React from 'react';
import { useState, useEffect } from 'react';
import anegdotService from './Services/anegdotService';
import Header from './Components/Header.component';
import CategoryList from './Components/CategoryList.component';
import Search from './Components/Search.component';
import AddAnegdot from './Components/AddAnegdot.component';
import AnegdotList from './Components/AnegdoteList.component';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [anegdots, setAnegdots] = useState([]);
  const [anegdot, setAnegdot] = useState('');
  const [anegdotName, setAnegdotName] = useState('');
  const [anegdotCategory, setAnegdotCategory] = useState('');
  const [anegdotMessage, setAnegdotMessage] = useState('');
  const [anegdotCategoryMessage, setAnegdotCategoryMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [filteredAnegdots, setFilteredAnegdots] = useState([]);

  let modalDisplay = isModalVisible ? 'block' : 'none';

  useEffect(() => {
    function getAnegdots() {
      anegdotService
      .getAll()
      .then(response => {
        setAnegdots(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

    getAnegdots();
  }, []);

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
      anegdotService
      .create(anegdotObject)
      .then(response => {
          // update state: copy old anegdotes and add new one
        setAnegdots([...anegdots, response.data]);
        // close modal and clear the fields
        setIsModalVisible(false);
        // clear fields
        setAnegdot('');
        setAnegdotCategory('');
      })
      .catch(err => {
        console.log(err);
      });
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

  const showAnegdots = (anegdot_category) => {
    const filtered_anegdots = anegdots.filter(anegdot => anegdot.category === anegdot_category);
    setFilteredAnegdots(filtered_anegdots);
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filtered_anegdots = anegdots.filter(anegdot => {
      return anegdot.text.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredAnegdots(filtered_anegdots);
  }

  let newLikes = 0;

  const upVoteAnegdot = (id) => {
    newLikes += 1;
    // find anegdot based on id
    const anegdot = anegdots.find(n => n.id === id);
    // update anegdot likes
    const likes = anegdot.likes + newLikes;
    // copy old anegdot and assign new likes
    const changedAnegdot = {...anegdot, likes};
    // make HTTP put request to update anegdot on the server side
    anegdotService
    .update(id, changedAnegdot)
    .then(response => {
      setAnegdots(anegdots.map(anegdot => anegdot.id !== id ? anegdot : response.data));
      setFilteredAnegdots(filteredAnegdots.map(anegdot => anegdot.id !== id ? anegdot : response.data));
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <Header />
      <CategoryList
        handleAllClick={() => showAnegdots('all')}
        handleHumorousClick={() => showAnegdots('humorous')}
        handleReminiscentClick={() => showAnegdots('reminiscent')}
        handlePhilosophicalClick={() => showAnegdots('philosophical')}
        handleCautionaryClick={() => showAnegdots('cautionary')}
        handleInspirationalClick={() => showAnegdots('inspirational')}
      />
      <Search 
        handleAddAnegdote={() => setIsModalVisible(true)}
        handleAnegdoteName={anegdotName}
        handleAnegdoteNameChange={(e) => setAnegdotName(e.target.value)}
        handleSearch={handleSearch}
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
      <AnegdotList
        anegdots={filteredAnegdots.length > 0 ? filteredAnegdots : anegdots}
        onUpvote={upVoteAnegdot}
      />
    </div>
  );
}

export default App;