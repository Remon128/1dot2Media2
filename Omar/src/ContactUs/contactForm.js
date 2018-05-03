import React from 'react' ;
import './formStyle.css';

const contactForm = () => {

    return(
        <div className='container'>
            <form>
                <h2>Contact Forms</h2>
                <div className='form-group'>
                    <label for="INPUTNAME">Name</label>
                    <input id="INPUTNAME" className='form-control s' type='text' name='name'/>
                </div>

                <div class='form-group'>
                    <label for="INPUTMAIL">Mail</label>
                    <input id="INPUTMAIL" className='form-control s' type='email' name='email'/>
                </div>

                <div class='form-group'>
                    <label for="INPUTMESSAGE">Message</label>
                    <input id="INPUTMESSAGE" className='form-control s' type='text' name='msg'/>
                </div>

                <br/> <br/> <br/>

                <div className='form-group'>
                    <label for="INPUTNUMBER">Phone Number</label>
                    <input id="INPUTNUMBER" className='form-control s' type='text' name='mobile'/>
                </div>

                <div className='form-group'>
                    <label for="INPUTWRITEMSG">Write Your Message</label>
                    <textarea id='INPUTWRITEMSG' className='form-control' name='write-msg'></textarea>
                </div>

                <button className='btn btn-danger pull-right'>Send </button>

            </form>
        </div>
       
        
    )
};
export default contactForm;