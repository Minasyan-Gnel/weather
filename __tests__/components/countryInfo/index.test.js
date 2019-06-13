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
        document.body.innerHTML = `<ul><li id="country-info"></li></ul>`;
        const countryInfo = document.getElementById("country-info");
        countryInfo.appendChild = jest.fn();
        expect(setCountryInfoItems(props)).toBeUndefined;
    });
});