import { useState } from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    <ul>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} removeContact={onRemove} />
          </li>
        );
      })}
    </ul>
  );
};
