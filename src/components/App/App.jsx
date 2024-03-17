import "./App.css";
import { ContactForm } from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { useSelector } from "react-redux";
import { EmptyContacts } from "../EmptyContacts/EmptyContacts";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

export const App = () => {
  const reduxUsers = useSelector(selectContacts);
  const reduxInputFilter = useSelector(selectNameFilter);
  const visibleUsers = reduxUsers.filter((user) =>
    user.name.toLowerCase().includes(reduxInputFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {(reduxUsers.length === 0 || visibleUsers.length === 0) && (
        <EmptyContacts />
      )}
    </div>
  );
};
