import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filterValue = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) =>
    contacts.items.filter(({ name }) =>
      name.toLowerCase().trim().includes(filterValue)
    )
  );

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
