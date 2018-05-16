import React, {Component} from 'react';

export default function HowItWorks(){
    return(
        <section>
            <h3>Want More Customizations? Contact Us.</h3>
            <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="company">Company</label>
              <input type="text" name='company' id='company' />
            </div>
            <div>
              <label for="message">Message</label>
           <textarea rows="6" cols="20">Enter your message</textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
        </section>
    )
}