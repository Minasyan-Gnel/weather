const Helpers = {
    createNodeElement: (params) => {
        const element = document.createElement(params.tagName);
        params.id && (element.id = params.id);
        params.type && (element.type = params.type);
        params.disabled !== undefined && (element.disabled = params.disabled);
        params.src && (element.src = params.src);
        params.alt && (element.alt = params.alt);
        params.text && (element.innerText = params.text);
        params.placeholder && (element.placeholder = params.placeholder);
        params.classes && (params.classes.forEach(elClass => element.classList.add(elClass)));
        params.clickHandler && (element.addEventListener("click", params.clickHandler));
        return element;
    }
};

export default Helpers;