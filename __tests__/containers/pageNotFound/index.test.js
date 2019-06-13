import PageNotFound from "../../../src/containers/pageNotFound";

describe("Page not found", () => {
    it("should run PageNotFound", () => {
        document.body.innerHTML = `<div id="layout"></div>`;
        expect(PageNotFound()).toBeUndefined;
    });
});