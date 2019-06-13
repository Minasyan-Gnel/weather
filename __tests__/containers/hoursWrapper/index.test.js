import HoursWrapper from "../../../src/containers/hoursWrapper";
import WeatherDataStore from "../../../src/dataStores/weatherDataStore";

describe("Hours wrapper", () => {
    const data = {hourly: {data: [
        {
            time: 1560369600
        },
        {
            time: 1560373200
        },
    ]}};
    it("should run HoursWrapper", () => {
        document.body.innerHTML = `<ul id="hours-wrapper"></ul>`;
        expect(HoursWrapper()).toBeString;
        WeatherDataStore.publish("dayData", data);
    });
});