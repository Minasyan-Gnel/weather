import Helpers from "../../helpers/helpersFunctionality";

export const setCountryInfoItems = (props) => {
    const {data} = props;
    const countryInfo = document.getElementById("country-info");
    const {timezone, currently: {time, summary, temperature}} = data;
    const date = Helpers.createNodeElement({
                    tagName: "P",
                    classes: ["country-info-date"],
                    text: new Date(time * 1000).toDateString()
                });
    const title = Helpers.createNodeElement({
                    tagName: "B",
                    classes: ["country-info-title"],
                    text: summary
                });
    const celsius = Helpers.createNodeElement({
                    tagName: "H1",
                    classes: ["country-info-celsius"],
                    text: temperature
                });
    const countryName = Helpers.createNodeElement({
                    tagName: "P",
                    classes: ["country-name"],
                    text: timezone
                });
    celsius.insertAdjacentHTML("beforeEnd", `<sup>o</sup>C`);
    countryInfo.appendChild(date);
    countryInfo.appendChild(title);
    countryInfo.appendChild(celsius);
    countryInfo.appendChild(countryName);
};