import {setDays} from "../../../src/components/days";
import Helpers from "../../../src/helpers/helpersFunctionality";
import weatherDataService from "../../../src/services/weatherDataService";
import Router from "../../../src/router";

describe("Days", () => {
    const props = {data: {daily: {data: [
        {
            time: 1560283200,
            precipType: "rain",
            temperatureHigh: 86.91
        },
        {
            time: 1560369600,
            precipType: "sun",
            temperatureHigh: 56.92
        }
    ]}}};
    it("should run days component", (done) => {
        document.getElementById = jest.fn(id => Helpers.createNodeElement({tagName: "LI", id}));
        const countryDaysBox = document.getElementById("country-days-box");
        weatherDataService.getDataByDay = jest.fn(() => Promise.resolve());
        Router.navigatePage = jest.fn(() => () => {});
        const day = Helpers.createNodeElement(
            {
                tagName: "LI",
                classes: ["day-bx"],
                clickHandler: async () => {
                    const params = await weatherDataService.getDataByDay();
                    Router.navigatePage("/dayHours", params)();
                }
            }
        );
        day.click();
        expect(weatherDataService.getDataByDay).toBeCalled();
        expect(Router.navigatePage()).toBeFunction;
        countryDaysBox.appendChild = jest.fn();
        countryDaysBox.appendChild(day);
        expect(countryDaysBox.appendChild).toBeCalled();
        expect(setDays(props)).toBeUndefined;
        done();
    });
});