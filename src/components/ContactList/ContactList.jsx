import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
  const reduxUsers = useSelector(selectContacts);
  const reduxInputFilter = useSelector(selectNameFilter);
  const visibleUsers = reduxUsers.filter((user) =>
    user.name.toLowerCase().includes(reduxInputFilter.toLowerCase())
  );

  return (
    <ul className={css.container}>
      {visibleUsers.map((contact) => {
        return (
          <li key={contact.id} className={css.listContainer}>
            <Contact data={contact} key={contact.id} />
          </li>
        );
      })}
    </ul>
  );
};
