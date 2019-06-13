import DayHours from "../../../src/containers/dayHours";

describe("Day hours", () => {
    it("should run DayHours", () => {
        document.body.innerHTML = `<div id="layout"></div>`;
        expect(DayHours()).toBeUndefined;
    });
});