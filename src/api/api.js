function registerUser(userData) {
    const { name, email, password } = userData;

    // validate user data
    if (!name || !email || !password) {
        return Promise.reject('Name, email, and password are required.');
    }

    // send POST request to API
    return fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}


function loginUser(userData) {
    const { email, password } = userData;

    // validate user data
    if (!email || !password) {
        return Promise.reject('Email and password are required.');
    }

    // send POST request to API
    return fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}


function getUser() {
    return fetch('http://localhost:8000/api/user', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}

export { registerUser, loginUser, getUser };
