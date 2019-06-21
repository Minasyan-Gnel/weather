import WeatherDataService from "../../src/services/weatherDataService";
import DataStores from "../../src/dataStores";

describe("WeatherDataService", () => {
    const params = {
        time: 1560283200
    };
    const url = "https://api.darksky.net/forecast/2069c09c97402a02bb15bbd5d3df3cce/40.1793024,44.520243199999996";

    it("should run weather data service", async () => {
        DataStores.setData = jest.fn();
        WeatherDataService.getUrl = jest.fn(() => Promise.resolve(url));
        expect(WeatherDataService.init("/countryWeather")).toBeUndefined;
        await WeatherDataService.getDataByDay(params);
        expect(DataStores.setData).toBeCalled();
    }, 8000);
});