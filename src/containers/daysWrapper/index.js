import "./style.css";
import WeatherDataStore from "../../dataStores/weatherDataStore";
import {setDays} from "../../components/days";

const DaysWrapper = () => {
    WeatherDataStore.subscribe(
        "weatherData",
        {
            keys: ["daily"],
            callback: data => setDays({data})
        }
    );
    return `<li id="country-days-box"></li>`;
};

export default DaysWrapper;