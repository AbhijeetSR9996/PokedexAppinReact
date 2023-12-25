import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.components";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";
import Modal from "./components/modal/modal.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked!");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) => {
    const nameMatches = monster.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const typeMatches = selectedType === "all" || monster.type === selectedType;

    return nameMatches && typeMatches;
  });

  const allMonsterTypes = [...new Set(monsters.map((monster) => monster.type))];

  return (
    <div className="App">
      <h1>
        <center> POKEDEX </center>
      </h1>
      <center>
        <SearchBox
          placeholder="search pokemons..."
          handleChange={handleChange}
        />
        <select
          id="typeDropdown"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="all">All Types</option>
          {allMonsterTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </center>
      <CardList monsters={filteredMonsters}>
        buttonProp={<button onClick={handleButtonClick}>Click Me</button>}
      </CardList>
      <button className="btnone">previous</button>
      <button className="btntwo">next</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
