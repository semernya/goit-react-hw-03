import { useState } from "react";
import initialContacts from '../../contacts.json'
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

export default function App() {

  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  )
}
