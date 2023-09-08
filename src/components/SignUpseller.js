import React from 'react';
import './SignUpseller.css';


export default function SignUpseller(props){
    return(
        <>
    { <div className="maindiv">
        <form className="mainform">
            <div className="lb-box name">
                <div className="f-name">
                    <label for="name">
              
                     </label>
                     <input className="f-name-input" type="text" placeholder="First Name"/>
                </div>
                <div className="l-name">
                    <label for="name">
                        
                     </label>
                     <input className="l-name-input" type="text" placeholder="Last Name"/>
                </div>
            </div>
            <div className="lb-box emailclass">
                <label for="email">
                  
                </label>
                <input className="emailinput" type="email" placeholder="Email"/>
            </div>
            <div className="lb-box passclass">
                <label for="password">
                  
                </label>
                <input className="passinput" type="password" placeholder="Password"/>
            </div>
            <div className="lb-box countryclass">
                <label for="country">
                   
                </label>
                <select name="country" id="country">
                    <option value="none">select country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                </select>
            </div>
            <div className="lb-box cbox">
                <input type="checkbox"/>
                <label for="terms">
                    I accept the terms and conditions
                </label>
            </div>
            <div className="lb-box createbutton">
                <button className="submit">{props.signas}</button>
            </div>

        </form>
    </div> }

</>
    );
}


