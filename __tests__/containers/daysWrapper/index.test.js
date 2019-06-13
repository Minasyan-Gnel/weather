import DaysWrapper from "../../../src/containers/daysWrapper";
import WeatherDataStore from "../../../src/dataStores/weatherDataStore";

describe("Days wrapper", () => {
    const data = {daily: {data: [
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
    ]}};
    it("should run DaysWrapper", () => {
        document.body.innerHTML = `<ul><li id="country-days-box"></li></ul>`;
        expect(DaysWrapper()).toBeString;
        WeatherDataStore.publish("weatherData", data);
    });
});