import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import HomeScreen from '../src/signUp';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('Home Screen ', () => {
    describe ('#Text', () => {
      it("should render a sign up text", () => {
        const wrap = shallow(<HomeScreen />);

        expect(wrap.containsMatchingElement("Sign up")).toBeTruthy()
      });
    });
    describe ('#Text', () => {
      it("should render a 'already have an account?' text", () => {
        const wrap = shallow(<HomeScreen />);

        expect(wrap.containsMatchingElement("Already have an account?")).toBeTruthy()
      });
    });
  });
