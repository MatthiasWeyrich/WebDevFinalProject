import './Registration.css';
import {Link} from 'react-router-dom';

const Registration = () => {
    return(
        <div class='container'>
            <div class='form'>
                <h1>Sign Up</h1>
                <input placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button>Submit</button>
                <p>Already have an account? <Link to='/login'>Login here</Link></p>
            </div>
        </div>
    )
}

export default Registration;