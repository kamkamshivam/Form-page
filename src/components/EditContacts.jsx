import '../App.css';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const EditContacts = ({ contacts, setActiveContact, setContacts }) => {
  useEffect(() => {
    setActiveContact(null);
  }, []);
  const { id } = useParams();
  const [editedContact, setEditedContact] = useState(contacts.find((contact) => contact.id === id));
  
  const navigate = useNavigate();
  let flag = 7;
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
      
  };
  const matchPass = (event) => {
    let iPass = event.target.value;
    (iPass === editedContact.pass ? (flag = 6) : (flag = 7))
  };
  const confirmPass = () => {
    (flag == 6 ? handleSave() : passError())
  };
  const passError = () => {
    document.getElementById("ePass").style.display = "block";
  };
  
  const handleSave = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
    setEditedContact(null);
    setActiveContact(null);
    navigate('/');
  };
  return (<>
    {typeof editedContact === 'undefined' ? (
      <div className="home-heading" >No Contacts Found</div>
    ) : (
      <div>
        <div  className="home-heading" >Contact Editor:</div>
        <div className="active-contact-container">
              <div className="active-contact-input-container">
                    <table className="table-edit">
                      <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Name:</div></td>
                        <td><input
                    type="text"
                    name="name"
                    value={editedContact.name}
                    onChange={handleChange}
                  /></td>
                      </tr>
                      <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Phone:</div></td>
                        <td><input
                    type="number"
                    name="phone"
                    value={editedContact.phone}
                    onChange={handleChange}
                  /></td>
                    </tr>
                    <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Email:</div></td>
                        <td><input
                    type="text"
                    name="email"
                    value={editedContact.email}
                    onChange={handleChange}
                  /></td>
                    </tr>
                    <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Age:</div></td>
                        <td><input
                    type="number"
                    name="age"
                    value={editedContact.age}
                    onChange={handleChange}
                  /></td>
            </tr>
            <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Password:</div></td>
                        <td><input
                    type="password"
                name="inputPass"
                onChange={matchPass}
              /></td>
              <td><div  id="ePass" className="error-text" style={{display:'none'}}>Password does not match!</div></td>
            </tr>
            
                    <tr>
                      
                      <td></td>
              <td><button onClick={confirmPass}>Save</button></td>
                    </tr>
                    </table>                
                  
              </div>
            </div>
      </div>
    )}
    </>    
    );
};

export default EditContacts;