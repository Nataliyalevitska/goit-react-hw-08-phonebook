import React from 'react';
import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import contactsAction from "../../redux/contacts";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { changeFilter } = contactsAction.actions;

  return (
    <>
      <TitleFilter>{t("filter.p")}</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        placeholder={t("filter.filterPlaceholder")}
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
