

export const setToken = (token: any) => {
    localStorage.setItem('token', JSON.stringify(token))

}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('token') || '{}')
    }

}