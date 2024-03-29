import { FaGenderless } from 'react-icons/fa';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/operations';
const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const isLoading = useSelector(({ contacts }) => contacts.isLoading);
  const handleDelete = ids => {
    dispatch(deleteContact(ids));
  };

  return (
    <Item>
      <FaGenderless />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button disabled={isLoading} onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};
export default ContactItem;
