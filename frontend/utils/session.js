export const setLogin = (setUser, {token, ...data}) => {
    localStorage.setItem('token', token)
    setUser({token, ...data})
} 

export const setLogout = setUser => {
    localStorage.removeItem('token')
    window.location.reload(false)
    setUser(null)
}