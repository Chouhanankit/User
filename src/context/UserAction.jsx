export const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    return data;
}


export const fetchSingleUser = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await response.json();
    return data;
}