import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";
import { useTranslation } from "react-i18next";

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../styles/index.css';
import { Title } from '../Phonebook/Phonebook.styled';


const Phonebook = () => {
 
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { deleteContacts } = contactsAction.actions;

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

  const getFilter = () => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    return (
      <>
        <Title>{t("phonebook.title")}</Title>
        <ContactForm allContacts={contacts} />
        <Title>{t("phonebook.subtitle")}</Title>
        <Filter />
        <ContactList lists={getFilter()} onDeleteContact={handleDelete} />
        <ToastContainer position="top-center" autoClose={3000}  theme="colored"/>
      </>
    );
   }

export default Phonebook;
