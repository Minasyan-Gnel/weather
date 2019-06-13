import {setDays} from "../../../src/components/days";
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
        },
        {
            time: 1560379600,
            precipType: "",
            temperatureHigh: 38.92
        }
    ]}}};

    it("should run days component", () => {
        document.body.innerHTML = `<ul><li id="country-days-box"></li></ul>`;
        weatherDataService.getDataByDay = jest.fn(() => Promise.resolve("resolve"));
        Router.navigatePage = jest.fn(() => () => {});
        expect(setDays(props)).toBeUndefined;
        const dayBox = document.getElementById("day-bx");
        dayBox.click();
    });
});