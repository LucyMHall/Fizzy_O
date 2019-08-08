import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('App', () => {
  describe ('#Text', () => {
    it("should render a label", () => {
      const wrap = shallow(<App />);

      expect(wrap.containsMatchingElement("Open up App.js to start working on your app!")).toBeTruthy()
    });
    });
  });
