import React from 'react';
import ContactRow from './ContactRow';

const ContactList = ({contacts, selectContact}) => {
     return(
         <table>
             <tbody>
                 <tr>
                     <th>Name</th>
                     <th>Phone</th>
                     <th>Email</th>
                 </tr>
                {
                    contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} selectContact={selectContact}/>
                    })
                }  
             </tbody>
         </table>  
     )  
}

export default ContactList;

