import DataFetcher from "../../src/helpers/dataFetcher";

describe("DataFetcher", () => {
    const url = "https://api.darksky.net/forecast/2069c09c97402a02bb15bbd5d3df3cce/40.1793024,44.520243199999996";

    it("should fetch data without params", async() => {
        await DataFetcher.getData(url);
    });

    it("should fetch data with params", async () => {
        await DataFetcher.getData(url, {time: 1560283200});
    });
});