import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.delete_btn}
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <span className={css.x}>x</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  delContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
