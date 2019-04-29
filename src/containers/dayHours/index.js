import HoursWrapper from "../hoursWrapper";

const DayHours = () => {
    const layout = document.getElementById("layout");
    const hoursWrapper = HoursWrapper();
    const html = `<div id="day-hours-wrapper">
            ${hoursWrapper}
        </div>`;
    layout.innerHTML = html;
};

export default DayHours;