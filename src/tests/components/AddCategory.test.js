import React from 'react';
import { shallow } from 'enzyme'

import AddCategory from '../../components/AddCategory'

describe('Tests on <AddCategory />', () => {

    const setCategories = jest.fn() //way to declare a jest function
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> )
    
    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={setCategories} /> )
    })

    test('should print it correctly', () => {

        expect( wrapper ).toMatchSnapshot()
    });

    test('should change the text input ', () => {
        const input = wrapper.find('input')
        const value = 'hello word'

        input.simulate('change', { target: {value} })

        expect( wrapper.find('input').prop('value') ).toBe(value)
    });

    test('should not post info on submit until input value be larger than 2', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()

    });

    test('should post the info if the input value length is larger than 2 and clean the value after submit', () => {
        const value = 'hello word'
        
        wrapper.find('input').simulate('change', { target: {value} })

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled()

        expect( wrapper.find('input').prop('value') ).toBe('')
    });
})