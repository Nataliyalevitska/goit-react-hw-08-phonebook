import React from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import '../../styles/index.css';
import { Title } from '../Phonebook/Phonebook.styled';
import * as storage from '../../services/localStorage';

const STORAGE_KET = 'contacts';
class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContact = storage.get(STORAGE_KET);
    if (savedContact) {
      this.setState({ contacts: savedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save(STORAGE_KET, contacts);
    }
  }

  // створення
  handleCreate = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  //видалення
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = value => this.setState({ filter: value });
  getFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { handleCreate, handleDelete, handleFilter, getFilter } = this;
    const { filter, contacts } = this.state;

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm allContacts={contacts} onSubmit={handleCreate} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList lists={getFilter()} onDeleteContact={handleDelete} />
      </>
    );
  }
}

export default Phonebook;

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts')
//   const parsedContacts = JSON.parse(contacts)

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts})
//   }
// }

// componentDidUpdate(prevState) {
//   const {contacts} = this.state
//   const stringifyContacts = JSON.stringify(contacts)

//   if (contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', stringifyContacts)
//   }
// }
