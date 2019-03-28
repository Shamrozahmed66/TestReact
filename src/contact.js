import React, { Component } from 'react';
import './App.css';
class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Contact Us</h1>
                    <hr />
                </div>
                <div id="contact" class="backdiv">
                    <form>
                        <label class="lbleft" for="fname">Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your Name" required />

                        <label for="em">Email</label>
                        <input type="email" id="lname" name="em" placeholder="Your Email" required />
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="subject">Subject</label>
                        <input type="text" name="mesg" required placeholder="Your Message" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Contact;
