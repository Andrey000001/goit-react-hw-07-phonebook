import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
export default function App() {
  const isLoading = useSelector(({ contacts }) => contacts.isLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h1>Pending...</h1>}
      <ContactList />
    </Container>
  );
}
