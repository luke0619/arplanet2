import { useState } from "react";

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const LoginHandler = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://127.0.0.1:3002/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const { token, data } = await response.json();
            console.log(token);
            console.log(data.user);
            localStorage.setItem('jwt', token);
            props.onLogin();
            setLoading(false);
        } catch (err) {
            setErrorMessage(err);
            console.log(errorMessage);
        }
    }
    if (loading) {
        return (
            <p>載入中</p>
        )
    }

    return (
        <form className='LoginForm'>
            <div>
                <label className='LoginForm__label' htmlFor='email'>信箱</label>
                <input className="LoginForm__input" type='text' id='email' value={email} onChange={emailHandler} />
            </div>
            <div>
                <label className='LoginForm__label' htmlFor='password'>密碼</label>
                <input className="LoginForm__input" type='password' id='password' value={password} onChange={passwordHandler} />
            </div>
            <button className='LoginForm__submit' type='button' onClick={LoginHandler}>登入</button>
        </form>
    )
}

export default LoginForm;