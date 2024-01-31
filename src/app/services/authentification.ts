const baseUrl = 'http://api.pnapi.thibaulthenrion.com/api'

export async function Login(email: string, password: string) {
    const body = {
        username: email,
        password: password
    }

    return await fetch(`${baseUrl}/app/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).catch((e) => {
        console.error(e)
    })
}

export function SignUp() {

}