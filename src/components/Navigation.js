import LoginForm from "./LoginForm";
import { useEffect, useState } from 'react';
const Navigation = (props) => {
    const [islogin, setislogin] = useState(false);

    const loginHandler = () => {
        setislogin(true);
    }

    const logoutHandler = () => {
        localStorage.setItem('jwt', 'logout')
        setislogin(false);
    }

    useEffect(() => {
        const check = () => {
            const user = localStorage.getItem('jwt')
            if (user !== 'logout' && user !== '') {
                setislogin(true);
            }
        }

        check()
    })

    return (
        <div>
            <ul className="Navigation">
                <li className="Navigation__item">導覽列項目</li>
                <li className="Navigation__item">導覽列項目</li>
                <li className="Navigation__item">導覽列項目</li>
            </ul>
            {!islogin && <LoginForm onLogin={loginHandler} />}
            {islogin && <button onClick={logoutHandler}>點我登出</button>}
        </div >
    )
}

export default Navigation;