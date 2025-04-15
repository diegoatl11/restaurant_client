import endpoints from "../components/endpoints";


export const accessLogin = async (request) => {
    const options = {
        method: 'POST',
        url: `${endpoints.LOGIN}`,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    };
    try {
        const response = await fetch(options.url, options);
        const res = await response.json();
        return { status: response.status, ...res };
    } catch (e) {
        console.error('error request getAccessLogin:', e);
        return false;
    }
};