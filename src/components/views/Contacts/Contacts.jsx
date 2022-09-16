import { Section, TitleH1 } from './Contacts.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <>
      <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
