import endpoints from "../components/endpoints";


export const accessUser = async () => {
    const options = {
        method: 'GET',
        url: `${endpoints.USERINFO}`,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
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