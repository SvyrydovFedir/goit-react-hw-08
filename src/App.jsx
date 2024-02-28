import { useState, useEffect } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import contacts from "./contacts.json";

export const App = () => {
  const [searchBar, setSearchBar] = useState("");
  const [contactList, setContactList] = useState(contacts);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContactList(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleSearch = (evt) => {
    setSearchBar(evt.target.value);
  };

  const handleAddContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const handleRemoveContact = (contactId) => {
    setContactList(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={searchBar} onChange={handleSearch} />
      <ContactList
        filteredContacts={filteredContacts}
        onRemove={handleRemoveContact}
      />
    </div>
  );
};
