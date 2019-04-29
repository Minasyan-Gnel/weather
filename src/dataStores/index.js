import WeatherDataStore from "./weatherDataStore";

class DataStore {
    constructor () {
        this._data = {};
        this.publishers = [WeatherDataStore];
    }

    setData (key, data) {
        this._data[key] = data;
        this.publishers.forEach(publisher => publisher.publish(key, data))
    }

    getState () {
        return this._data;
    }
}

export default new DataStore();