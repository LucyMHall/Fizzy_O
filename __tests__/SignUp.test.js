import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import HomeScreen from '../src/signUp';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('App', () => {
  describe ('#Text', () => {
    it("should render a label", () => {
      const wrap = shallow(<HomeScreen />);

      expect(wrap.containsMatchingElement("Welcome to Fizzy_O!")).toBeTruthy()
    });
    });
  });
