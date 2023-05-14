import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact, index) => {
          return (
            <li key={index}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}
