import Helpers from "../../helpers/helpersFunctionality";
import Router from "../../router";
import weatherDataService from "../../services/weatherDataService";

export const setDays = (props) => {
    const {createNodeElement} = Helpers;
    const {data} = props;
    const countryDaysBox = document.getElementById("country-days-box");
    const daysWrapper = createNodeElement(
        {
            tagName: "UL",
            classes: ["days-wrapper"]
        }
    );
    data.daily && data.daily.data.forEach(item => {
        const clickHandler = async () => {
                const params = await weatherDataService.getDataByDay({time: item.time});
                Router.navigatePage("/dayHours", params)();
        };
        const day = createNodeElement(
            {
                tagName: "LI",
                classes: ["day-bx"],
                clickHandler
            }
        );
        const precipType = createNodeElement(
            {
                tagName: "H4",
                text: item.precipType || "normal"
            }
        );
        const celsius = createNodeElement(
            {
                tagName: "SPAN",
                text: item.temperatureHigh
            }
        );
        const date = createNodeElement(
            {
                tagName: "SPAN",
                text: new Date(item.time * 1000).toDateString()
            }
        );
        day.appendChild(precipType);
        celsius.insertAdjacentHTML("beforeEnd", `<sup>o</sup>C`);
        day.appendChild(celsius);
        day.appendChild(date);
        daysWrapper.appendChild(day);
    });
countryDaysBox.appendChild(daysWrapper);
};
