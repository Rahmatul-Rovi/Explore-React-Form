import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailonChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit' , name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}></form>
            <input defaultValue={name} type="text" onChange={nameOnChange} />
            <br />
            <input defaultValue={email} type="email" onChange={emailonChange} />
            <br />
            <input type="password" name="" onChange={passwordOnChange} />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default HookForm;