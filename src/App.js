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

  let modalDisplay = isModalVisible ? 'block' : 'none';

  // useEffect(() => {
  //   function handleKeyDown() {
  //     window.addEventListener('keydown', e => {
  //       if (e.code === 'Escape') {
  //         setIsModalVisible(false);
  //       }
  //     });
  //   }

  //   handleKeyDown();
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // create anegdot object
    // keys: text, category, likes
    const anegdotObj = {
      text: anegdot,
      category: anegdotCategory,
      likes: 0
    };

    // update state: copy old anegdotes and add new one
    setAnegdots([...anegdots, anegdotObj]);

    // after 500ms close modal and clear the fields
    setTimeout(() => {
      // close modal
      setIsModalVisible(false);
      // clear fields
      setAnegdot('');
      setAnegdotCategory('');
    }, 500);
  }

  console.log(anegdots);

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
        handleModalClose={() => setIsModalVisible(false)}
        handleAnegdotName={anegdot}
        handleAnegdotNameChange={(e) => setAnegdot(e.target.value)}
        handleAnegdotCategory={anegdotCategory}
        handleAnegdotCategoryChange={(e) => setAnegdotCategory(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <AnegdotList anegdots={anegdots} />
    </div>
  );
}

export default App;