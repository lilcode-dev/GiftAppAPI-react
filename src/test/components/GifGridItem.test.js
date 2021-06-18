import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('test on <GifGridItem />', () => {
    const title = 'A title'
    const url = 'https://klk.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
    test('should have a paragraph with the title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title); 
        
    });
})
