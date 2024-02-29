import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export const Contact = ({ contact, removeContact  }) => {
  return (
    <>
      <div className={css.userContainer}>
        <div className={css.user}>
        <FaUser />
        <span>{contact.name}</span>
        </div>
        <div className={css.user}>
        <FaPhoneAlt />
        <span>{contact.number}</span>
        </div>
      </div>

      <div className={css.btnContainer}>
      <button className={css.button} onClick={() => removeContact(contact.id)}>Delete</button>
      </div>
    </>
  );
};
