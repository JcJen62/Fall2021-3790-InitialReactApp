import React from 'react'
import GoTrue from 'gotrue-js'

const IdentityAuthContext = React.createContext({
    user: {},
    confirm: () => {},
    login: () => { },
    logout: () => { },
    signup: () => { },
})

export const IdentityAuthContextProvider = (props) => {
    const [user, setUser] = React.useState({})
    const [auth, setAuth] = React.useState({})

    React.useEffect(() => {
        const initializeAuth = () => {
            setAuth(new GoTrue({
                APIUrl: 'https://confident-yonath-6c5a52.netlify.app/.netlify/identity',
                audience: '',
                setCookie: false,
            }))
        }
        initializeAuth()
    }, [])

    const login = (email, password, remember) => {
        auth.login(email, password, remember)
            .then((response) => {
                console.log('Success logging in!', response)
                setUser(auth.currentUser())
            })
        .catch((error) => console.log('Error: ', error))
    }

    const logout = () => {
        return user.logout()
    }

    const signup = (email, password) => {
        auth.signup(email, password)
            .then((response) => console.log('Confirmation email sent', response))
        .catch((error) => console.log("It's an error: ", error))
    }

    const confirm = (token, remember) => {
        auth.confirm(token, remember)
            .then((response) => {
            console.log('Trying to confirm user', response)
            })
            .catch((error) => {
            console.log('Got an error: ', error)
        })
    }


return (
    <IdentityAuthContext.Provider value={{
        user,
        confirm,
        login,
        logout,
        signup,
    }}>{props.children}</IdentityAuthContext.Provider>
)
}

export const useIdentityAuthContext = () => React.useContext(IdentityAuthContext)