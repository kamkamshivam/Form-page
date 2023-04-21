import React, { useState } from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';

function Home({ contacts, activeContact, setActiveContact , setContacts }) {  

  const click = (id) => {
    setActiveContact(id);
  };

  const handleDelete = () => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== activeContact
    );
    setContacts(updatedContacts);
    setActiveContact(null);
  };
  const url = "/EditContacts";
  return (
    <>
      <div className="home-heading">Contact List:</div>

      {contacts.length === 0 ? (
        <p className="empty-list">No contacts to display</p>
      ) : (
        <>
          <div className="home-contacts-container">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`home-contacts ${
                  contact.id === activeContact && "active"
                }`}
                onClick={() => click(contact.id)}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="contacts-heading-display">Name:</div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.name}
                        </div>
                      </td>
                      <td>
                        <div className="contacts-heading-display">
                          Phone:
                        </div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.phone}
                        </div>
                      </td>
                      <td>
                      {contact.id === activeContact && (
                  <div>
                    
                    <button><NavLink to={url+'/'+activeContact} style={{color:'yellow',textDecoration:'none', width:'200px'}} >Edit</NavLink></button>
                  </div>
                )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="contacts-heading-display">
                          Email:
                        </div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.email}
                        </div>
                      </td>
                      <td>
                        <div className="contacts-heading-display">Age:</div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.age}
                        </div>
                      </td>
                      <td>
                      {contact.id === activeContact && (
                  <div>
                    
                    <button style={{color:'yellow'}}
                      id="delete_button"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                )}
                      </td>
                    </tr>
                    
                  </tbody>
                  
                </table>
                
              </div>
            ))}
          </div>

          
        </>
      )}
    </>
  );
}

export default Home
