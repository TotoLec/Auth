import Button from '@mui/joy/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

require('../styles/pages/home.css');

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const getToken = () => {
        if (localStorage.getItem('token') === null) {
            return window.location.href="/";
        }
        return null;
    }

    function getData(){
        let token = localStorage.getItem('token');
        axios.get('http://localhost:3000/api/user/getUser', {
            headers: {
                'auth-token': token
            }
        })
        .then(res => {
            setName(res.data.name);
            setEmail(res.data.email);
            setDate(res.data.date);
        })
        .catch(
            err => console.log(err)
        )

    }

    function logOff(){
        localStorage.removeItem('token');
        window.location.href="/";
    }

    useEffect(()=>{
        getToken();
        getData();
    }, [])

    return (
        <div className="page-container">
            <div className='home-container'>
                <div className='flex p-10 justify-evenly items-center'>
                    <p>Name : <span className='font-bold'>{name}</span></p>
                    <p>Email : <span className='font-bold'>{email}</span></p>
                    <p>Creation date : <span className='font-bold'>{date}</span></p>
                    <Button variant="outlined" color='danger' onClick={logOff}>Log off</Button>
                </div>
                <div className='text-4xl py-48 flex flex-col justify-center items-center'>
                    <h1>Home Page</h1>
                </div>
            </div>
        </div>
    )
}
    
export default Home;
    