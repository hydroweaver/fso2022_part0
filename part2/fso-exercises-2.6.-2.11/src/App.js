import { useState, useEffect } from "react";
import Person from "./components/persons";
import Filter from "./components/filter";
import Form from "./components/form";
import axios from "axios";

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const addPersonHandler = (event) => {
    event.preventDefault();

    if (allPersons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already in the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const inputPerson = (event) => {
    setNewName(event.target.value);
  };

  const inputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const inputFilter = (event) => {
    setFilter(event.target.value);
  };

  const allPersons =
    newFilter === ""
      ? persons
      : persons.filter((val) =>
          val.name.toLowerCase().includes(newFilter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={inputFilter} />
      <h2>Add New Contacts</h2>
      <Form
        onSubmit={addPersonHandler}
        nameInputValue={newName}
        nameChangeHandler={inputPerson}
        phoneInputValue={newNumber}
        phoneChaneHandler={inputNumber}
      />
      <h2>Numbers</h2>
      {allPersons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
