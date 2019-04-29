import Helpers from "../../helpers/helpersFunctionality";

export const setHours = (props) => {
    const {data} = props;
    const hoursWrapper = document.getElementById("hours-wrapper");
    data.hourly && data.hourly.data.forEach(item => {
        const elementLi = Helpers.createNodeElement({
            tagName: "LI",
            text: new Date(item.time * 1000).toDateString(), 
        });
        hoursWrapper.appendChild(elementLi);
    });
}