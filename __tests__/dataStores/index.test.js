import DataStores from "../../src/dataStores";

describe("DataStore", () => {
    it("should run DataStore", () => {
        DataStores.setData("weatherData", {});
        DataStores.getState();
    });
});