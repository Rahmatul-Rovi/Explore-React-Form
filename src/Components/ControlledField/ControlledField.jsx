import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleSubmit =(e) => {
e.preventDefault();
console.log('Submitted');
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
             <input type="email" name='email' id='' placeholder='email' required />
            <br />
            <input type="password" name="password" id="" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
        <br />
        <input type="submit" value="submit" />
           </form>
        
        </div>
    );
};

export default ControlledField;