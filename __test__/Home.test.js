// Dependencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// Components & Containers
import { Home } from '../src/containers/Home';

describe(`Shallow Render 'HOME' component`,()=>{
  let wrapper;
  const isMobile = false;

  beforeEach(()=>{
      wrapper = shallow(<Home isMobile={isMobile}/>)
  });

  it('render the DUMB component', () => {
     expect(wrapper.length).toEqual(1);
  });

  it(`'isMobile' shows 'Desktop Device' text`, () => {
      expect(wrapper.find('.is-device').text()).toEqual('Desktop Device');
  });
});
