import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import DailyStatsScreen from '../src/dailyStats';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'


describe ('Daily stats screen', () => {
  describe ('#Text', () => {
    it("should render a text on daily stats page", () => {
      const wrap = shallow(<DailyStatsScreen />);

      expect(wrap.containsMatchingElement("Daily Stats")).toBeTruthy()
    });
  });
});
