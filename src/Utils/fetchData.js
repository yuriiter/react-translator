export const fetchData = async (searchVal) => {
    const url = `http://localhost:8000/translate/${searchVal}`
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
    })
    
    const responseJSON = await response.json()
    return responseJSON
}