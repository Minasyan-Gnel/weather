import {setHours} from "../../../src/components/hours";

describe("Hours", () => {
    const props = {data: {hourly: {data: [
        {
            time: 1560369600
        },
        {
            time: 1560373200
        },
    ]}}};
    it("should run setHours", () => {
        document.body.innerHTML = `<ul id="hours-wrapper"></ul>`;
        expect(setHours(props)).toBeUndefined;
    });
});