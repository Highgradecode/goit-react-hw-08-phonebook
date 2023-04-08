import { useEffect, useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../store/contacts/contactSlice";
import { fetchContacts, postContact, deleteContact as deleteContactAPI } from "../store/contacts/api";


export const Contacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const {contactsArr} = useSelector(getContacts);
  const filterValue = useSelector(state => state.filter);
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      
      default:
        return
    }
  }

  const addContact = (e) => {
  e.preventDefault();

  if (contactsArr.find(contact => contact.name === name)) {
    e.target.reset()
    return alert(`${name} already in contacts.`)
  }

  const newContact = {
    name: name,
    number: number,
    };
  
    dispatch(postContact(newContact))
  
    e.target.reset()
  
  };

  const filteredContacts = () => {
    const normlizeFilter = filterValue.toLowerCase();
    
    
    return contactsArr.filter(contact => contact.name.toLowerCase().includes(normlizeFilter))
  };

  const deleteContact = (contactId) => {

    dispatch(deleteContactAPI(contactId));
  };
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        color: '#010101'
      }}
    >
      <h1 style={{margin: 30}}>Phonebook</h1>
      <ContactForm addContact={addContact}
        handleChange={handleChange}/>
      <h2 style={{ margin: 30 }}>Contacts</h2>
      <Filter/>
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact} />
    </div>
  
  );
};