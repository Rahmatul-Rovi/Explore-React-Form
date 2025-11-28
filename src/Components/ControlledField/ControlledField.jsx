import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        if (password.length < 6) {
            setError('Password must be at least 6 characters or longer');
        }
        else{
            setError('');
        }
    }
    const handleSubmit =(e) => {
e.preventDefault();
console.log(email, password);
console.log('Submitted');
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
             <input type="email" onChange={handleEmailChange} defaultValue={email} name='email' id='' placeholder='email' required />
            <br />
            <input type="password" name="password" id="" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
        <br />
        <input type="submit" value="submit" />
           </form>

        <p style={{color: 'red'}}>
            <small>{error}</small>
        </p>
        </div>
    );
};

export default ControlledField;