const googleSearch = require('./script');

const dbMock = [
    'disney.com',
    'dog.com',
    'dogpictures.com',
    'cheesecake.com',
    'doggy.com'
];

it('is a silly test', () => {
    expect('hello').toBe('hello');
});

describe('googleSearch:', () => {
    it('searches an information', () => {
        expect(googleSearch('test', dbMock)).toEqual([]);
        expect(googleSearch('disney.com', dbMock)).toEqual(['disney.com']);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com', 'doggy.com']);
    });
    it('works with an undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    it('does not return more than 3 matches', () => {
        expect(googleSearch('dog', dbMock).length).toBeLessThanOrEqual(3);
        expect(googleSearch('.com', dbMock).length).toBeLessThanOrEqual(3);
    });
});
