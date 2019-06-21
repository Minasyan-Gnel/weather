import { config } from "../configs";
import DataStores from "../dataStores";
import DataFetcher from "../helpers/dataFetcher";

class WeatherDataService {
    init = () => {
        this.getWeatherData();
    };

    getWeatherData = async () => {
        const url = await this.getUrl();
        const data = await DataFetcher.getData(url);
        DataStores.setData("weatherData", data);
    };

    getDataByDay = async (params) => {
        const url = await this.getUrl();
        const data = await DataFetcher.getData(url, params);
        DataStores.setData("dayData", data);
        return Promise.resolve(params);
    };

    getUrl = () => {
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(position => {
                const url = `${config.url}${config.apiSecretKey}/${position.coords.latitude},${position.coords.longitude}`;
                resolve(url);
            });
        });
    }
}

export default new WeatherDataService();