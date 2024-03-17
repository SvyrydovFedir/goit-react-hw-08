import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export const Contact = ({ data: { name, number, id } }) => {
  const dispath = useDispatch();

  return (
    <>
      <div className={css.userContainer}>
        <div className={css.user}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.user}>
          <FaPhoneAlt />
          <span>{number}</span>
        </div>
      </div>

      <div className={css.btnContainer}>
        <button
          className={css.button}
          onClick={() => {
            dispath(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
