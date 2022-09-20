import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from '../../Redux/сontactsApi';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm() {
  const { data: contacts, refetch } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;
    const alreadyAdded = await contacts.some(obj => obj.name === name.value);
    alreadyAdded
      ? alert(`Contact ${name} is already in your contacts`)
      : await addContact({ name: name.value, number: number.value });
    reset();
    refetch();
  };

  const reset = () => {
    // setName('');
    // setNumber('');
    setContact('');
  };

  const handleChange = evt => {
    setContact(prev => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  // const handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={contact.name}
        placeholder="Enter name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={contact.number}
        placeholder="Enter number"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit" disabled={isLoading}>
        Add new contact
      </Button>
    </Form>
  );
}

// import { useState } from 'react';
// import {
//   useGetContactsQuery,
//   useAddContactsMutation,
// } from '../../Redux/сontactsApi';
// import { Form, Label, Input, Button } from './ContactForm.styled';

// export default function ContactForm() {
//   const { data: contacts, refetch } = useGetContactsQuery();
//   const [addContact, { isLoading }] = useAddContactsMutation();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (contacts.find(contact => contact.name === name)) {
//       return alert(`${name} is already in your contacts list`);
//     }

//     addContact({ name: name, number: number });
//     reset();
//     refetch();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         break;
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>Name</Label>
//       <Input
//         type="text"
//         name="name"
//         value={name}
//         placeholder="Enter name"
//         onChange={handleChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <Label>Number</Label>
//       <Input
//         type="tel"
//         name="number"
//         value={number}
//         placeholder="Enter number"
//         onChange={handleChange}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />

//       <Button type="submit" disabled={isLoading}>
//         Add new contact
//       </Button>
//     </Form>
//   );
// }
