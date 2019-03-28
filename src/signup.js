import React, { Component } from 'react';
import './App.css';
class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Registration</h1>
                    <hr />
                </div>
                <div class="backdiv">
                    <form name="myform">
                        <label class="lbleft" for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your First name" required />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name" required />

                        <label for="country">Country</label>
                        <select id="country" name="country" >
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="CNIC">CNIC</label>
                        <input type="text" name="cnic" required placeholder="Your CNIC" />
                        <label for="dob">Date of Birth</label>
                        <input type="date" name="db" required />

                        <label for="p1">Password</label>
                        <input type="password" name="p1" placeholder="Your Password" required />
                        <label for="p1">Retype Password</label>
                        <input type="password" name="p2" placeholder="Retype Password" required />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Signup;
