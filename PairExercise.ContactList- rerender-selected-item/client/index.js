import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios from 'axios';
import SingleContact from './SingleContact';

// const getContacts = async() => {
//   try{
//     //get an obj of axios call response w/ config, data, header, request.status props.
//     const response = await axios.get('/api/contacts');
//     //selecting data property of the axios obj. value of data is an obj w/ 0: user1, 1:user2 ..
//     const contacts = response.data;
//     //typeof contacts = 'object'
//     console.log(contacts)
//   }
//   catch(ex) {
//     console.log(ex)
//   }
// }


// dummy data
// const contacts = [
//   { "id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com" },
//   { "id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com" },
//   { "id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com" }
// ]

class Main extends Component {
  constructor(){
    super();
    this.state = {
      contacts : [],
      selectedContact : {} 
    };
    this.selectContact = this.selectContact.bind(this);
  }

  //lifecycle hook
  async componentDidMount(){
    // const response = await getContacts();
    const response = (await axios.get('/api/contacts')).data;
    const data = [...response]
    this.setState({ contacts : data})
  }

  async selectContact(contactId){
    try{
      const response = (await axios.get(`api/contacts/${contactId}`)).data;
      this.setState({ selectedContact: response });
    }
    catch(ex){
      console.log(ex)
    }
  }

  render() {
    const { contacts , selectedContact } = this.state;
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {(Object.keys(selectedContact).length) === 0 ? <ContactList contacts={contacts} selectContact={this.selectContact} /> : <SingleContact contact={selectedContact} selectContact={this.selectContact}/> }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
