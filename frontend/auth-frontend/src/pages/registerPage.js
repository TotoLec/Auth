import AuthSignInImg from '../assets/auth_register.svg';
import Register from '../components/register';

require('../styles/pages/authPage.css');

const RegisterPage = () => {
    return (
        <div className="page-container">
            <div className='auth-popup'>
                <div className='auth-popup-image'>
                    <img src={AuthSignInImg} alt='Auth logo' className='drop-shadow-xl'/>
                </div>
                <div className='auth-popup-form'>
                    <Register />
                </div>
            </div>
        </div>
    )
}
    
export default RegisterPage;
    