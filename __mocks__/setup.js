import {fetch} from 'whatwg-fetch';

const mockGeolocation = {
        getCurrentPosition: jest.fn(() => Promise.resolve("success"))
};

global.navigator.geolocation = mockGeolocation;
global.fetch = fetch;