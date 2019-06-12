import Bootstrap from "../src/bootstrap";
import WeatherDataService from "../src/services/weatherDataService";
import Router from "../src/router";

describe("Bootstrap", () => {
    WeatherDataService.init = jest.fn();
    Router.init = jest.fn();
    it("should run Bootstrap", () => {
        expect(Bootstrap()).toBeUdefined;
        expect(WeatherDataService.init).toBeCalled();
        expect(Router.init).toBeCalled();
    });
});