import "./style.css";
import CountryInfo from "../countryInfoWrapper";
import DaysWrapper from "../daysWrapper";

const CountryWrapper = () => {
    const layout = document.getElementById("layout"),
        daysWrapper = DaysWrapper(),
        countryInfo = CountryInfo(),
        html = `<ul class="country-wrapper">
                    ${countryInfo}
                    ${daysWrapper}
                    </ul>`;
    layout.innerHTML = html;
};

export default CountryWrapper;