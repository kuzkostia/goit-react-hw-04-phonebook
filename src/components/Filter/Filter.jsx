import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeInput }) => {
  return (
    <div className={css.filter_container}>
      <label className={css.filter_label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filter}
        onChange={onChangeInput} // при зміні значення поля - виклик функції onChangeInput
        value={filter} // початкове значення, яке зберігається в filter
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
