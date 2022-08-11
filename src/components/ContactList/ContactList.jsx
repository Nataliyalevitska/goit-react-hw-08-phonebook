import React from 'react';
import { useDispatch } from 'react-redux';
import contactsAction from "../../redux/contacts";

import PropTypes from 'prop-types';
import {
  ContactsItems,
  ContactsLi,
  ButtonContact,
  ItemWrap,
} from './ContactList.styled';

const ContactList = ({ lists, onClick }) => {
  const dispatch = useDispatch();
   const {  deleteContacts } = contactsAction.actions;

  return (
    <>
      <ContactsItems>
        {lists.map(({ name, number, id }) => (
          <ContactsLi key={id}>
            <ItemWrap>
              {name}: {number}
              <ButtonContact
                type="button"
                id={id}
                onClick={(e) => dispatch(deleteContacts(id))}
              >
                delete
              </ButtonContact>
            </ItemWrap>
          </ContactsLi>
        ))}
      </ContactsItems>
    </>
  );
};

ContactList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
