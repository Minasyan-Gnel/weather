import WeatherDataService from "./services/weatherDataService";
import Router from "./router";

const Bootstrap = () => {
    WeatherDataService.init();
    Router.init("/countryWeather");
};

export default Bootstrap;