import React from 'react'
import GoTrue from 'gotrue-js'

const IdentityAuthContext = React.createContext({
    user: {},
    login: () => { },
    logout: () => { },
    signup: () => { },
})

export const IdentityAuthContextProvider = (props) => {
    const [user, setUser] = React.useState({})
    const [auth, setAuth] = React.useState({})

    // eslint-disable-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        const initializeAuth = () => {
            setAuth(new GoTrue({
                APIUrl: 'https://confident-yonath-6c5a52.netlify.app/.netlify/identity',
                audience: '',
                setCookie: false,
            }))
        }
        initializeAuth()
        console.log(auth)
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


return (
    <IdentityAuthContext.Provider value={{
        user,
        login,
        logout,
        signup,
    }}>{props.children}</IdentityAuthContext.Provider>
)
}

export const useIdentityAuthContext = () => React.useContext(IdentityAuthContext)