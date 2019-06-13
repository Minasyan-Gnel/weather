import WeatherDataStore from "../../src/dataStores/weatherDataStore";
import DataStore from "../../src/dataStores";

describe("WeatherDataStore", () => {
    it("should check wrong subscribe", () => {
        expect(WeatherDataStore.subscribe("weatherData", [])).toEqual("Subscibe faild");
    });

    it("should subscribe data that allredy exists", () => {
        DataStore.publishers = [WeatherDataStore];
        DataStore.setData("dayHours", {data: {}});
        WeatherDataStore.subscribe("dayHours", jest.fn());
    });

    it("should check item type for object", () => {
        WeatherDataStore.subscribe("dayHours", {
            keys: ["hourly"],
            callback: jest.fn()
        });
        WeatherDataStore.publish("dayHours", {hourly: {data: {}}});
    });
});