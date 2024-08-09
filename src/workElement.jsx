import "./card.css";
import "./App.css";
import Workdata from "./mywork";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer,NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useState } from "react";

export default function WorkContainer() {
    
  // let notify=()=>{
  //   NotificationManager.success('Message sent successfully!')
  //  }
  
  let notify=()=>{
    toast.error('This page is currently not available');
  }
    return (
        <div className="main-container-work-section"> 
        <h1 id="my-work-h1">MY WORK</h1>
        <div className="main-cards">
            
 {Workdata.map ((item, i) =>{

    let description = item.description;
    if(description.length > 20){
       let wordCount = 250;
        description = description.substring(0, wordCount) + "...";
    }
     return (
       <>
         <div className="card">
           <div className="card-img" id={item.imageId}></div>
           <div className="card-link-box">
             <a href={item.imageLink}>Site</a>
           </div>
           <div className="card-para">
             <h2 className="card-h2">{item.title}</h2>
             <p className="card-p">
               {description}
             </p>
           </div>
         </div>
       </>
     );

 })}
 </div>
 <button className="work-section-seeMore-button" onClick={notify}>See M0re</button>
 <ToastContainer />
 {/* <NotificationContainer/> */}
 </div>

);
}
