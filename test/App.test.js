import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/src/components/App.jsx';
import HousesList from '../client/src/components/HousesList.jsx';


describe('App component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });	
  it('should have a state with houses and moreRevealed keys', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const state = wrapper.state();
    expect(state.houses).toBeDefined();
    expect(state.moreRevealed).toBeDefined();
  });  
  it('should render a Housing List component', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(HousesList)).toHaveLength(1);
  }); 
});