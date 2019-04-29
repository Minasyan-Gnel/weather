import DayHours from "../containers/dayHours";
import CountryWrapper from "../containers/countryWrapper";
import PageNotFound from "../containers/pageNotFound";

const routes = {
    "/dayHours": DayHours,
    "/countryWeather": CountryWrapper
};

class Router {
    init (initPage) {
        this.navigatePage(window.location.pathname.length > 1
            ? window.location.pathname
            : initPage)();
    }

    navigatePage (to, params) {
        return () => {
            const navigateUrl = params
                ? Object.keys(params).reduce((arr, curr) => arr + `${curr}=${params[curr]}`, `${to}/?`)
                : to;
            window.history.pushState({ path: navigateUrl }, navigateUrl, window.location.origin + navigateUrl);
            routes[to] ? routes[to]() : PageNotFound();
        }
    }
}

export default new Router();