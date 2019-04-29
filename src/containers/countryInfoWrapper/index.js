import WeatherDataStore from "../../dataStores/weatherDataStore";
import {setCountryInfoItems} from "../../components/countryInfo";

const CountryInfo = () => {
    WeatherDataStore.subscribe(
        "weatherData",
        {
            keys: ["timezone", "currently"],
            callback: data => setCountryInfoItems({data})
        }
    );
    return `<li id="country-info"></li>`;
};

export default CountryInfo;