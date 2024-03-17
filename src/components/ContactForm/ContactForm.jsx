import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const dispath = useDispatch();
  const inputNameId = useId();
  const inputNumberId = useId();
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 symbols")
      .max(20, "Max length is 20")
      .required("Name is required")
      .matches("^[a-zA-Z]+$", "Only alphabet symbols"),
    number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8, "Number must be at least 8 symbols")
      .required("A phone number is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, action) => {
          dispath(addContact(values));
          action.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form>
          <div className={css.formGroup}>
            <label htmlFor={inputNameId}>Name</label>
            <Field type="text" name="name" id={inputNameId} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={inputNumberId}>Number</label>
            <Field type="text" name="number" id={inputNumberId} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </>
  );
};
