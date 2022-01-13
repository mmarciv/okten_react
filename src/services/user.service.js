const url = 'https://jsonplaceholder.typicode.com/users/';

const getAll = () => {
    return fetch(url)
        .then(value => value.json());
}

const getById = (id) => {
    return fetch(url + id)
        .then(value => value.json());
}

const getPosts = (id) => {
    return fetch(url + id + '/posts')
        .then(value => value.json());
}

export const userService = {
    getAll,
    getById,
    getPosts
}