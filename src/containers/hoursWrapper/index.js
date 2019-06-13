import WeatherDataStore from "../../dataStores/weatherDataStore";
import {setHours} from "../../components/hours";

const HoursWrapper = () => {
    WeatherDataStore.subscribe("dayData", {
        keys: ["hourly"],
        callback: data => setHours({data})
    });
    return `<ul id="hours-wrapper"></ul>`;
}

export default HoursWrapper;