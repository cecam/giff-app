import React from 'react';
import { shallow } from 'enzyme'

import GiffGrid from '../../components/GiffGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Tests on <GiffGrid />', () => {
    
    test('should print the component', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GiffGrid category="one punch" />)

        expect( wrapper ).toMatchSnapshot()
    });

    test('should show items with useFetchGifs response', () => {
        const gifs = [{
            id: 'abd',
            url: 'https://localhost:3000',
            title: 'anything'
        },{
            id: '123',
            url: 'https://localhost:3000',
            title: 'anything'
        },]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GiffGrid category="one punch" />)

        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GiffItem').length ).toBe(gifs.length)
    });

})