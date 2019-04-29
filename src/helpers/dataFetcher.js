class DataFetcher {
    getData = async (url, params) => {
        const request = params
            ? Object.keys(params).reduce((arr, curr) => arr + `,${params[curr]}`, url)
            : url;
        const response = await fetch("https://cors-anywhere.herokuapp.com/" + request);
        const data = await response.json();
        return Promise.resolve(data)
    }
}

export default new DataFetcher();