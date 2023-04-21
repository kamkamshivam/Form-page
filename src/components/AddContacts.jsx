import '../App.css';
import React, { useState, useEffect} from 'react';

const AddContacts = ({ onAddContact, setActiveContact }) => {
    useEffect(() => {
        setActiveContact(null);
      }, []);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');

    const errorNull = () => {
    document.getElementById("eName").style.display = "none";
    document.getElementById("eEmail").style.display = "none";
    document.getElementById("ePhone").style.display = "none";
    document.getElementById("eAge").style.display = "none";
    document.getElementById("ePass").style.display = "none";
    document.getElementById("eCPass").style.display = "none";
    document.getElementById("eMPass").style.display = "none";
    document.getElementById("eVName").style.display = "none";
    document.getElementById("eVEmail").style.display = "none";
    document.getElementById("eVPhone").style.display = "none";
    document.getElementById("eVAge").style.display = "none";
    document.getElementById("eVPass").style.display = "none";
    };
    
    const validName = new RegExp('^[A-Za-z]+$');
    const validPhone = new RegExp('^[0-9]{10}$');
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const handleSave = () => {
        errorNull();
        (name == "" ? (document.getElementById("eName").style.display = "block") : (!validName.test(name) ? (document.getElementById("eVName").style.display = "block") :
            (phone == "" ? (document.getElementById("ePhone").style.display = "block") : (!validPhone.test(phone) ? (document.getElementById("eVPhone").style.display = "block") :
                (email == "" ? (document.getElementById("eEmail").style.display = "block") :  (!validEmail.test(email) ? (document.getElementById("eVEmail").style.display = "block") :
                    (age == "" ? (document.getElementById("eAge").style.display = "block") : (age<18 ? (document.getElementById("eVAge").style.display = "block") :
                        (pass == "" ? (document.getElementById("ePass").style.display = "block") : (!validPassword.test(pass) ? (document.getElementById("eVPass").style.display = "block") :
                            (cPass == "" ? (document.getElementById("eCPass").style.display = "block") : passHandler())
                        ))))))))))
    };
    const passHandler = () => {
        (pass === cPass ? sendSave() : passMissMatch())
    };
    const passMissMatch = () => {
        errorNull();
        document.getElementById("eMPass").style.display = "block";
        setPass('');
        setCPass('');
    };
    const sendSave = () => {
        errorNull();
        onAddContact(name, phone, email, age, pass);
        setName('');
        setPhone('');
        setEmail('');
        setAge('');
        setPass('');
        setCPass('');
    };
    return (
    <>
        <div className="addContacts-main">
           <div>
            <table>
              <tbody className='tablebody'>
                <tr>
                    <td><div  className='contacts-heading' style={{marginTop: '15px'}}>Name:</div></td>
                    <td><input type="text" value={name} style={{ marginTop: '15px' }} onChange={(e) => setName(e.target.value)} /></td>
                    <td><div id="eName" className="error-text" style={{ marginTop: '10px', display: 'none' }}>Name cannot be left empty</div></td>
                    <td><div  id="eVName" className="error-text" style={{marginTop: '10px',display:'none'}}>Please enter a valid Name</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Phone:</div></td>
                    <td> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                    <td><div id="ePhone" className="error-text" style={{ display: 'none' }}>Phone cannot be left empty</div></td>
                    <td><div id="eVPhone" className="error-text" style={{display:'none'}}>Please enter a valid Phone number</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Email:</div></td>
                    <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    <td><div id="eEmail" className="error-text" style={{ display: 'none' }}>Email cannot be left empty</div></td>
                    <td><div id="eVEmail" className="error-text" style={{display:'none'}}>Please enter a valid Email</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Age:</div></td>
                    <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></td>
                    <td><div id="eAge" className="error-text" style={{ display: 'none' }}>Age cannot be left empty</div></td>
                    <td><div id="eVAge" className="error-text" style={{display:'none'}}>Age has to be greater than 18</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Password:</div></td>
                    <td><input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /></td>
                    <td><div id="ePass" className="error-text" style={{ display: 'none' }}>Password cannot be left empty</div></td>
                    <td><div id="eVPass" className="error-text" style={{display:'none'}}>Password must be of atleast length 6 and must contain an alphabet and a number</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Confirm Password:</div></td>
                    <td><input type="password" value={cPass} onChange={(e) => setCPass(e.target.value)} /></td>
                    <td><div id="eCPass" className="error-text" style={{ display: 'none' }}>Confirm Password cannot be left empty</div></td>
                    <td><div id="eMPass" className="error-text" style={{display:'none'}}>Password doesn't match</div></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'></div></td>
                    <button className='savebtn' onClick={handleSave}>Save</button>
                </tr>
                </tbody>
                </table>
                </div>
        </div>  
        
    </>    
    );
};

export default AddContacts;