import styles from './style.module.css'
import { useState } from "react"
import React from 'react';
import DetailContact from './DetailContact';
import userImg from "../images/user.png";



export default function ContactForm()
{
    
    const [user,setUser]=useState({name:'',email:''})
    const [contactList,setcontactList]=useState([])
    let name,value,id;
    const [showUser,setShowUser]=useState(false)
    const handleInputValue=(event)=>
    {  event.preventDefault();
        name=event.target.name;
        value=event.target.value;
        id=event.target.id;
        setUser({...user,[name]:value})
       
        
    }

    const contactSubmit=(e)=>
    {
        e.preventDefault();
        let templist = [...contactList]
        // let templist=contactList;
        templist.push(user);
        setcontactList(templist);
        setShowUser(true);
        console.log(contactList)
    }
    const  userList= contactList.map((contact)=>
    <div className={styles.contactdata}>
         {/* <img className={styles.contactimage} src={userImg} alt="user" /> */}
        <div className="content">
        <p className={styles.contactname}>{contact.name}</p>
                <p className={styles.contactemail}>{contact.email}</p>
        </div>
     </div>
    )
 return(
        <div >
            <div>
                <h1  className={styles.contactHeader}>Contact Manager</h1>
                <div className={styles.contactForm} >
                <h1 className={styles.contactAddHeader}> Add Contact</h1>
                <form onSubmit={contactSubmit}>
                  <h4  className={styles.contactAddName}>  Name: </h4>
                <input onChange={handleInputValue} name="name" id='name' className={styles.contactInputName} value={user.name}  type="text" placeholder="Enter your name"></input>
                   <br></br>
                 <h4 className={styles.contactAddEmail}> Email:  </h4>
                <input onChange={handleInputValue} name="email" id="email" className={styles.contactInputEmail} value={user.email}  type="text" placeholder="Enter your Email Id"></input>
                  <br></br>
                  <button className={styles.contactButton}>Add</button>
                </form>
                </div>
                {showUser && userList}
            </div>
        </div>
    )
}
// function DetailContact(contact){
   
    
//     return (
//         <div>
//             <p>{contact.contact.name}</p>
//             <p>{contact.contact.email}</p>
//          </div>
//     )




// } 