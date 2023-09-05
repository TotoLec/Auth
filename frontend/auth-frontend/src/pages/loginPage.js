import AuthSignInImg from '../assets/auth_sign_in.svg';
import Login from '../components/login';

require('../styles/pages/authPage.css');

const LoginPage = () => {
    return (
        <div className="page-container">
            <div className='auth-popup'>
                <div className='auth-popup-image'>
                    <img src={AuthSignInImg} alt='Auth logo'/>
                </div>
                <div className='auth-popup-form'>
                    <Login />
                </div>
            </div>
        </div>
    )
}
    
export default LoginPage;
    