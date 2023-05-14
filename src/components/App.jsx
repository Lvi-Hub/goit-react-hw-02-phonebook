import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { nanoid } from 'nanoid';

// model.id = nanoid();
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formsubmitHandler = data => {
    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formsubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          filterChange={this.state.filter}
          onInputFilter={this.changeFilter}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
