import React from 'react';
import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import contactsAction from "../../redux/contacts";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
    const { changeFilter } = contactsAction.actions;
  return (
    <>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        placeholder="*Enter name"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
