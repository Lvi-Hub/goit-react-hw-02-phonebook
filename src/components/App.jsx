import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { nanoid } from 'nanoid';

// model.id = nanoid();
export class App extends Component {
  state = {
    contacts: [],
  };

  formsubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formsubmitHandler} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
