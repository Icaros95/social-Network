import './login.scss';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e: any) => {
        setInputs(previous => ({ ...previous, [e.target.name]: e.target.value }));
    }

    const { login } = useContext(AuthContext);

    const handleLogin = async (e:any) => {
        e.preventDefault();

        try {
            await login(inputs);
            navigate('/');
        } catch (error:any){
            setError(error.response.data);
        }
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome to Borapedia</h1>
                    <p>A place where you can connect with people from anywhere and share your day to day!</p>
                    <span>Don't you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' name='username' onChange={handleChange} />
                        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                        {
                            error ? <p style={{ fontSize: 10, color: 'red', alignSelf: 'center' }}>{error}</p> : null
                        }
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;