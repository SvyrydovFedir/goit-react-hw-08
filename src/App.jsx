import { useState } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import contacts from "./contacts.json";

export const App = () => {
  const [searchBar, setSearchBar] = useState("");
  const [contactList, setContactList] = useState(contacts);

  const handleSearch = (evt) => {
    setSearchBar(evt.target.value);
  };

  const handleAddContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBar.toLowerCase())
  );
  console.log(contactList);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={searchBar} onChange={handleSearch} />
      <ContactList contacts={contactList} filteredContacts={filteredContacts} />
    </div>
  );
};
