import { useState } from 'react';
import './register.scss';
import { Link } from "react-router-dom";
import axios from 'axios';


const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e:any) => {
        setInputs(previous => ({...previous, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e:any) => {
        e.preventDefault();

        // solicitud async con axios a api para registro
        try {
            await axios.post('/api/auth/register', inputs);
        } catch (error:any) {
            setError(error.response.data);
        }
    }

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Borapedia</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae aperiam cum amet inventore accusantium, sequi distinctio, similique, nostrum necessitatibus ducimus deserunt? Nemo dolores maiores sapiente est ipsa explicabo soluta.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" name='username' onChange={handleChange} />
                        <input type="email" placeholder="Email" name='email' onChange={handleChange} />
                        <input type="password" placeholder="Password" name='password' onChange={handleChange} />
                        <input type="text" placeholder="Name" name='name' onChange={handleChange} />
                        {
                            error ? <p style={{fontSize: 10, color: 'red', alignSelf: 'center'}}>{error}</p> : null
                        }
                        <button onClick={handleClick} >Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;