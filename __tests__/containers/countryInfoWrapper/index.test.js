import CountryInfo from "../../../src/containers/countryInfoWrapper";
import WeatherDataStore from "../../../src/dataStores/weatherDataStore";

describe("Country info wrapper", () => {
    const data = {
        timezone: "Asia/Yerevan",
        currently: {
            time: 1560340110,
            summary: "Clear",
            temperature: 86.41
        }
    };
    it("should run CountryInfo", () => {
        document.body.innerHTML = `<ul><li id="country-info"></li></ul>`;
        expect(CountryInfo()).toBeString;
        WeatherDataStore.publish("weatherData", data);
    });
});