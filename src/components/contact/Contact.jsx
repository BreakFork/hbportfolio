import React, { useContext } from 'react';
import contactContext from '../../contexts/DataContext';
// import Img from '../../images/IMG_1903.jpeg';
import './contact.css'

const Contact = () => {
    const contact = useContext(contactContext);
    // console.log(Img)
    return(

        <div className='contact-container' role="presentation">
            <h2 className="contact-container--title">CONTACT</h2>

            <section className='contact'>
                {/* {Img} */}
                <div className='contact-avatar--wrapper dflex-rc' role='presentation'>
                    <img className='contact--avatar' src={contact.picture.src} alt={contact.picture.alt} />
                </div>
                

                <div className='contact-statut--wrapper' role='presentation'>

                    <span className='contact-statut--span'>statut : {contact.contactStatut}</span>

                    <p className='contact-statut--paragraph'>{contact.contactParagraph}</p>

                    <div className='contact-statut--btn-bar dflex-rc'>
                        <a className='contact--btn' href={contact.contactMail}><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        <a className='contact--btn' href={contact.contactMail}><i class="fa-brands fa-linkedin-in"></i></a>
                        <a className='contact--btn' href={contact.contactMail}><i class="fa-brands fa-twitter"></i></a>
                        <a className='contact--btn' href={contact.contactGithub}><i class="fa-brands fa-github fa-xl"></i></a>
                    </div>
                </div>

            </section>
        </div>
        
    )
};

export default Contact;