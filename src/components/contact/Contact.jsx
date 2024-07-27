import React, { useContext } from 'react';
import contactContext from '../../contexts/DataContext';
// import Img from '../../images/IMG_1903.jpeg';
import './contact.css'

const Contact = () => {
    const contact = useContext(contactContext);
    // console.log(Img)
    return(
        <section className='contact'>
            {/* {Img} */}
            
            <img className='contact--avatar' src={contact.picture.src} alt="" />

            <div className='contact--wrapper' role='presentation'>

                <span className='contact--statut'>statut : {contact.contactStatut}</span>

                <p className='contact--paragraph'>{contact.contactParagraph}</p>

                <div className='contact--btn-bar dflex-rc'>
                    <a className='contact--btn' href={contact.contactMail}><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <a className='contact--btn' href={contact.contactMail}><i class="fa-brands fa-linkedin-in"></i></a>
                    <a className='contact--btn' href={contact.contactMail}><i class="fa-brands fa-twitter"></i></a>                 
                </div>         
            </div>
            
        </section>
    )
};

export default Contact;