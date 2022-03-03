import React from 'react';
import Favorite from './Favorite';

const SingleContact = ({contact, selectContact}) => {
    return(
        <div id='single-contact'>
            <img src={contact.imageUrl} />
            <div id='contact-info'>
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <Favorite contact={contact} selectContact={selectContact} />
            </div>
        </div>
    )
}

export default SingleContact;