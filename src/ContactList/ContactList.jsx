import { useState } from "react";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'

export const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.listContainer}>
            <Contact contact={contact} removeContact={onRemove} />
          </li>
        );
      })}
    </ul>
  );
};
