/* eslint-disable no-undef */
import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import store from "./../../Store/store";
import {Provider} from 'react-redux';
import Done from "../Done/Done";



describe('Component Done', () => {
	const wrapper = shallow(<Provider store={store}><Done listAgendas={localStorageMock.getData.allAgendas} nextStation="InProcess"/></Provider>);

	it('Component Done create snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('Component Done renders without crashing', () => {
		expect(wrapper.prop('nextStation')).toEqual("InProcess");
	});
});