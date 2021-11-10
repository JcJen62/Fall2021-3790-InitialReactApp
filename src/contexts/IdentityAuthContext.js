import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const IdentityAuthContext = React.createContext({
    isAuthenticated: false,
    user: null,
    authenticate: () => {},
    signout: () => { },
})

export const IdentityAuthContextProvider = (props) => {
    const [user, setUser] = React.useState(null)
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    React.useEffect(() => {
        const initializeAuth = () => {
            window.netlifyIdentity = netlifyIdentity
            netlifyIdentity.init()
        }
        initializeAuth()
    }, [])

    const authenticate = () => {
        setIsAuthenticated(true)
        netlifyIdentity.open()
        netlifyIdentity.on('login', user => {
            setUser(user)
        })
    }

    const signout = (callback) => {
        setIsAuthenticated(false)
        netlifyIdentity.logout()
        netlifyIdentity.on('logout', () => {
            setUser(user)
            callback()
        })
    }


return (
    <IdentityAuthContext.Provider value={{
        user,
        isAuthenticated,
        authenticate,
        signout,
    }}>{props.children}</IdentityAuthContext.Provider>
)
}

export const useIdentityAuthContext = () => React.useContext(IdentityAuthContext)