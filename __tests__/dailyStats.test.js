import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import DailyStatsScreen from '../src/dailyStats';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


// describe ('Daily stats screen', () => {
//   describe ('#Text', () => {
//     xit("should render a text on daily stats page", () => {
//       const wrap = shallow(<DailyStatsScreen />);

//       expect(wrap.containsMatchingElement("Your progress")).toBeTruthy()
//     });
//   });
// });
