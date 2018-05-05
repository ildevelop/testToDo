import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockData  from './data';

const localStorageMock = {
	getData: mockData,
};
global.localStorageMock = localStorageMock;

configure({ adapter: new Adapter() });