import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Test on hook useFetchGifs', () => {
    
    test('should return the initial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('naruto') )
        
        const { data, loading } = result.current
        await waitForNextUpdate()
        
        expect( data ).toEqual([])
        expect( loading ).toBe(true)

    });

    test('should return an image array and loading on false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('naruto') )
        await waitForNextUpdate()
        
        const { data, loading } = result.current

        expect( data.length ).toBe(10)
        expect( loading ).toBe(false)

    });
})