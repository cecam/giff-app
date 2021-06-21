import React from 'react';
import { shallow } from 'enzyme'

import GiffItem from '../../components/GiffItem'

describe('Test on <GiffItem />', () => {
    const title = 'Test title'
    const url = 'http://localhost:3000'

    const wrapper = shallow( <GiffItem title={title} url={url} /> )
    
    test('should print the component', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Should have a paragraph with title', () => {
        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe(title.trim())
    })

    test('should the img as the same time than a url and alt prop', () => {
        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe(url)
        expect( img.prop('alt') ).toBe(title)
    });

    test('should have the animate__fadeIn class', () => {
        const div = wrapper.find('div')
        const animationClass = 'animate__fadeIn'
        
        const className = div.prop('className')

        expect( className.includes(animationClass) ).toBe(true)
    });
})