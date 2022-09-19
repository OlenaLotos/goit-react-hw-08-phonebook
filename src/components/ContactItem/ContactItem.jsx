import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from '../../Redux/сontactsApi';
import { ItemLi, Button, Link } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  const onDeleteContact = id => {
    deleteContact(id);
  };
  return (
    <ItemLi key={id}>
      <Link href="tel:{number}">
        {name}: {number}
      </Link>
      <Button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ItemLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
