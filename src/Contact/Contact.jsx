export const Contact = ({ contact, removeContact  }) => {
  return (
    <>
      <div>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <button onClick={() => removeContact(contact.id)}>Delete</button>
    </>
  );
};
