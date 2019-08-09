import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import LoginScreen from '../src/logIn';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('Log In screen', () => {
  describe ('#Text', () => {
    it("should render a text on log in page", () => {
      const wrap = shallow(<LoginScreen />);

      expect(wrap.containsMatchingElement("Log In")).toBeTruthy()
    });
    });
  });
