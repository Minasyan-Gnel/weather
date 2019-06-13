import DataStore from "../dataStores";

const getDataByKeys = (keys, data) =>
    keys.reduce((acc, curr) => {
        acc[curr] = data[curr];
        return acc;
    }, {});


class WeatherDataStore {
    constructor() {
        this.events = {};
    }

    subscribe(topic, item) {
        if (!((typeof item === 'object' && item.constructor !== Array) || typeof item === 'function')) return "Subscibe faild";
        const storeState = DataStore.getState();
        this.events[topic] = this.events[topic] || [];
        this.events[topic].push(item);
        storeState[topic] && setTimeout(() => this.publish(topic, storeState[topic]), 0);
    }

    publish(topic, data) {
        if (!this.events[topic]) return;
        this.events[topic]
            .forEach(item => typeof item === "object" ?
                item.callback(getDataByKeys(item.keys, data)) :
                item(data));
    }
}

export default new WeatherDataStore();