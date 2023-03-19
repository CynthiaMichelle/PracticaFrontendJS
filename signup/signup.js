export async function createUser(email, password) {
    //construir un objeto con email y password
    const user = {
        username: email,
        password: password
    }

    //consumir el api de sparrest utilizando un post y enviando los datos que ha introducido el usuario
    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error('Error al crear el usuario')
    }
}