import { useState } from "react";
import api from "../services/api";

const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
});
const submit = async(e)=>{
    e.preventDefault();

    await api.post(
        "contact-messages/",
        form
    );

    alert("Message sent successfully.");
}

function Contact() {
    return (
        <section className="page-section">
            <div className="container">

                <h1>Contact Us</h1>

                <form
className="contact-form"
onSubmit={submit}
>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Message"
                    />

                    <button
                        className="button button-primary"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Contact;