import './Auth.css';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div class='container'>
            <div class='form'>
                <h1>Login</h1>
                <input placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button>Submit</button>
                <p>Don't have an account yet? <Link to='/signup'>Sign up here</Link></p>
            </div>
        </div>
    )
}

export default Login;