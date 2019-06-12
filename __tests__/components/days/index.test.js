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
    it("should run days component", () => {
        document.body.innerHTML = `<ul><li id="country-days-box"></li></ul>`;
        const countryDaysBox = document.getElementById("country-days-box");
        const clickHandler = async () => {
                weatherDataService.getDataByDay = jest.fn(() => Promise.resolve("resolve"));
                const params = await weatherDataService.getDataByDay();
                expect(params).toEqual("resolve");
                // Router.navigatePage("/dayHours", params)();
        };
        clickHandler();
        expect(setDays(props)).toBeUndefined;
    });
});