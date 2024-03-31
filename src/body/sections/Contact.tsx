import React, { useState } from "react";
import "./Contact.css";
import { ValidationError, useForm } from "@formspree/react";
import github_logo from "../../assets/github.png"
import linkedin_logo from "../../assets/linkedin.png"
import insta_logo from "../../assets/insta.png"

function Contact() {
    const [state, handleSubmit] = useForm('xyyrnnyr');
    const [submitted, setSubmitted] = useState(false);

    const handleFormSumbit = (value: any) => {
        setSubmitted(true);
        handleSubmit(value);
    }

    return (
        <div className="Section Contact" id="contact">
            <p id="contact-title">Contact</p>
            <div id="contact-container">
                <div id="contact-icons">
                    <a href="https://github.com/ranajitroy">
                        <div  className="SocialIcon">
                            <img src={github_logo} alt="github" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ranajitroy">
                        <div className="SocialIcon">
                            <img src={linkedin_logo} alt="linkedin" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/ranajitroy">
                        <div className="SocialIcon">
                            <img src={insta_logo} alt="insta" />
                        </div>
                    </a>
                </div>
                <form id="email-me" onSubmit={handleFormSumbit}>
                    {(submitted && !(state.submitting))? (state.succeeded?
                    <p className="AfterSumbit">Message Sent.<br/><br/>I will be replying soon!</p> : <p className="AfterSumbit">Ooops! Something went wrong.<br/><br/>Connect with me on Linkedin!</p>) :
                     <>
                        <input placeholder="Name" className="inputfieldbox" id="formname" type="text" name="name" required/>
                        <input placeholder="Email" className="inputfieldbox" id="formemail" type="email" name="email" required />
                        <ValidationError id="errormessage" field="email" prefix="^ this" errors={state.errors} />
                        <textarea placeholder="Message" className="inputfieldbox" id="formmsg" name="message" required/>
                        <button type="submit" disabled={state.submitting}>Send</button>
                    </>}
                </form>
            </div>
        </div>
    );
}

export default Contact;