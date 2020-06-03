import React from 'react';
import { shallow } from 'enzyme';
import Frofile from './frofile';

describe('<Frofile />', () => {
  test('renders', () => {
    const wrapper = shallow(<Frofile />);
    expect(wrapper).toMatchSnapshot();
  });
});
