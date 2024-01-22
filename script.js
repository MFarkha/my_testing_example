const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpics.com',
    'dogs.com',
    'mycatfavourites.com',
    'yourcat.com'
];

const googleSearch = (input, db=googleDatabase) => {
    const matches = db.filter(website => {
        return website.includes(input);
    });
    return (matches.length > 3) ? matches.slice(0, 3): matches;
}

// console.log(googleSearch('animal'));

module.exports = googleSearch;