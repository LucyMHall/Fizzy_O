import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import RecordSessionScreen from '../src/recordSession';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('record session screen', () => {
  describe ('#Text', () => {
    it("should render a text on record session page", () => {
      const wrap = shallow(<RecordSessionScreen />);

      expect(wrap.containsMatchingElement("Record your session")).toBeTruthy()
    });
  });
  describe ('#Text', () => {
    xit("should render a text on record session page", () => {
      const wrap = shallow(<RecordSessionScreen />);

      expect(wrap.containsMatchingElement("Submit")).toBeTruthy()
    });
  });
});
