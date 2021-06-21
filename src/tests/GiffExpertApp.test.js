import React from 'react';
import { shallow } from 'enzyme';

import GiffExpertApp from '../GiffExpertApp'

describe('Tests on <GiffExpertApp />', () => {

    test('should print the component', () => {
        const wrapper = shallow( <GiffExpertApp /> )

        expect( wrapper ).toMatchSnapshot()
    });

    test('should print a list of categories', () => {
        const categories = ['naruto', 'one punch']
        const wrapper = shallow( <GiffExpertApp defaultCategories={categories} /> )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GiffGrid').length ).toBe(categories.length)

    });
})
