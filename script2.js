const getPeoplePromise = (fetchFunc) => {
    return fetchFunc('https://swapi.py4e.com/api/people')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const result = {
                count: data.count,
                results: data.results
            }
            return result;
        })
        .catch(err => console.log(err));
}

const getPeople = async (fetchFunc) => {
    try {
        const response = await fetchFunc('https://swapi.py4e.com/api/people');
        const data = await response.json();
        const result = {
            count: data.count,
            results: data.results
        }
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}