import Helpers from "../../src/helpers/helpersFunctionality";

describe("Helpers", () => {
    it("should create img element", () => {
        expect(Helpers.createNodeElement({
            tagName: "IMG",
            src: "image",
            alt: "picture"
        })).toBeObject;
    });

    it("should create input element", () => {
        expect(Helpers.createNodeElement({
            tagName: "INPUT",
            placeholder: "button",
            type: "button",
            disabled: true
        })).toBeObject;
    });
});