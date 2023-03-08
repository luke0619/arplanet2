

const login = async (email, password) => {

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
    const result = response.json();
    console.log(result);
}

export default login