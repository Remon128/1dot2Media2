import React  from 'react' ;
import './errorStyle.css'


const error = () => {

    return(
        <div class='not-found'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-8'>
                        <div class='data text-center'>
                            <h1>404</h1>
                            <h4>Page Not Found</h4>
                            <p>
                                Sorry, but the page you were looking for could not be found on them. Try checking the URL for the error , and then press the refresh button on your browser or try to find something else in our website.
                            </p>
                        </div>
                    </div>

                    <div class='col-md-4'>
                        <img className='sign' src={require('../images/sign.png')}/>
                        <img className='vector' src={require('../images/vector.png')}/>
                    </div>
                </div>
            </div>
        </div>
            
    )
};
export default error;