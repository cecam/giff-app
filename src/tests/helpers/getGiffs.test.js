import { getGiffs } from '../../helpers/getGiffs'

describe('tests with getGiffs', () => {
    
    test('should bring 10 elements from API', async () => {
        const gifs = await getGiffs('dragon ball')

        expect( gifs.length ).toBe(10)
    });
    
    
    test('should bring 10 elements if sends an empty string as a category', async () => {
        const gifs = await getGiffs('')
        expect( gifs.length ).toBe(0)
    });
    
    test('should bring 10 elements if it does not send a category', async () => {
        const gifs = await getGiffs()
        expect( gifs.length ).toBe(10)
    });
})