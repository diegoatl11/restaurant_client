import endpoints from "../endpoints";


export const getAccessLogin = async (request) => {
    const options = {
        method: 'POST',
        url: `${endpoints.LOGIN}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    };
    try {
        const response = await fetch(options.url, options);
        console.log("Status:", response.status);
        const res = await response.json();
        return { status: response.status, ...res };
    } catch (e) {
        console.error('error request getAccessLogin:', e);
        return false;
    }
};