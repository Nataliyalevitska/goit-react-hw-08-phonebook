import { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid';
import {
  PhoneLabel,
  PhoneInput,
  ButtonContact,
  PhoneForm,
} from './ContactForm.styled';

const ContactForm = ({ allContacts, onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = (allContacts) => allContacts.name === name;
    allContacts.some(isDuplicate) ? toast.error(`${name} already exist in your contacts!`)
      : onSubmit({ name, number, id: nanoid(3) });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
 
  const isBtnDis = Object.values({ name, number }).some((value) => {
    return !value;
  });

    return (
      <PhoneForm onSubmit={handleSubmit}>
        <PhoneLabel>
          Name
          <PhoneInput
            type="text"
            name="name"
            value={name}
            placeholder="*Enter name"
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=" Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan "
            required
          />
        </PhoneLabel>
        <PhoneLabel>
          Number
          <PhoneInput
            type="tel"
            name="number"
            value={number}
            placeholder="*Enter phone"
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=" Phone number must be digits and can contain spaces, dashes, parentheses and can start with + "
            required
          />
        </PhoneLabel>
        <ButtonContact type="submit" disabled={isBtnDis}>
          Add contact
        </ButtonContact>
      </PhoneForm>
    );
  }

export default ContactForm;
