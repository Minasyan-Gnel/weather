import {setCountryInfoItems} from "../../../src/components/countryInfo";
import Helpers from "../../../src/helpers/helpersFunctionality";

describe("Country Info", () => {
    const props = {data: {
        timezone: "Asia/Yerevan",
        currently: {
            time: 1560340110,
            summary: "Clear",
            temperature: 86.41
        }
    }};
    it("should run countryInfo component", () => {
        document.getElementById = jest.fn(id => Helpers.createNodeElement({tagName: "LI", id}));
        const countryInfo = document.getElementById("country-info");
        countryInfo.appendChild = jest.fn();
        expect(setCountryInfoItems(props)).toBeUndefined;
    });
});