import CountryWrapper from "../../../src/containers/countryWrapper";

describe("Country wrapper", () => {
    it("should run CountryWrapper", () => {
        document.body.innerHTML = `<div id="layout"></div>`;
        expect(CountryWrapper()).toBeUndefined;
    });
});