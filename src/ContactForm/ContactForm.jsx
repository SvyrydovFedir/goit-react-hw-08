import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters")
      .required("Name is required"),
    number: Yup.number().required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.formGroup}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field type="text" name="number" id={numberFieldId} />
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
