import { useState } from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, filteredContacts }) => {
  const [deletedContacts, setDeletedContacts] = useState([]);

  const removeContact = (contactId) => {
    setDeletedContacts([...deletedContacts, contactId]);
    console.log(deletedContacts);
  };

  const visibleContacts =
    filteredContacts.length > 0
      ? filteredContacts.filter((contact) => !deletedContacts.includes(contact.id))
      : contacts.filter((contact) => !deletedContacts.includes(contact.id));

  return (
    <ul>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} removeContact={removeContact} />
          </li>
        );
      })}
    </ul>
  );
};
