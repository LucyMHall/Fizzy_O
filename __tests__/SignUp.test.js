import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Text from 'react-native';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer'

describe ('App', () => {
  describe ('#Text', () => {
    // it('should display a welcome message', () => {
    //   const app = shallow(<App/>);
    //   const text = app.find('Text').at(0).text();
    //   expect(text).toEqual('Open up App.js to start working on your app!');
    // });
    // it("should render a label", () => {
    //   const wrap = shallow(<App/>);
    //
    //   expect(wrap.text()).toEqual("Open up App.js to start working on your app!");
    // });
    });
  });
