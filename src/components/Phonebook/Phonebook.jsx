// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";
// import { useLocalStorage } from "react-use";
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../styles/index.css';
import { Title } from '../Phonebook/Phonebook.styled';

// const STORAGE_KEY = 'contacts';

const Phonebook = () => {
  // const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, []);
  // const [filter, setFilter] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const { deleteContacts } = contactsAction.actions;

  const handleDelete = (id) => {
    // setContacts(contacts.filter((contact) => contact.id !== ev.target.id));
    dispatch(deleteContacts(id));
  };

  const getFilter = () => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // const handleCreate = (newContact) => {
  //   setContacts([...contacts, newContact]);
  // };

  // const handleDelete = id => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const handleFilter = (value) => setFilter(value);
  // const getFilter = () => {
  //   return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    
  // };

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm allContacts={contacts} />
        <Title>Contacts</Title>
        <Filter />
        <ContactList lists={getFilter()} onDeleteContact={handleDelete} />
        <ToastContainer position="top-center" autoClose={3000}  theme="colored"/>
      </>
    );
   }

export default Phonebook;
