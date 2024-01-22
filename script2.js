const getPeoplePromise = () => {
    return fetch('https://swapi.py4e.com/api/people/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const result = {
                count: data.count,
                results: data.results[0]
            }
            return result;
        })
        .catch(err => console.log(err));
}

const getPeople = async () => {
    try {
        const response = await fetch('https://swapi.py4e.com/api/people/');
        const data = await response.json();
        const result = {
            count: data.count,
            results: data.results[0]
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}