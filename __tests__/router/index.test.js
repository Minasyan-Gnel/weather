import Router from "../../src/router";


describe("Router", () => {
    const params = {
        time: 1560283200
    };
    it("should run router", () => {
        document.body.innerHTML = `<div id="layout"></div>`;
        expect(Router.init("/countryWeather")).toBeUndefined;
        const doRout = Router.navigatePage("/dayHours", params);
        expect(doRout()).toBeUndefined;
        Router.init("/countryWeather");
    });
});