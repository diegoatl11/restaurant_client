const PROTOCOL = process.env.PROTOCOL;
const HOST = process.env.HOST;

console.log("protocol: ", PROTOCOL);
console.log("host: ", HOST);

const endpoints = {
    //sesion
    LOGIN: `${PROTOCOL}://${HOST}/api/authentication/login`,
    REGISTER_USER: `${PROTOCOL}://${HOST}/api/authentication/register`,
    UPDATE_USER: `${PROTOCOL}://${HOST}/api/authentication/update`,
    DELETE_USER: `${PROTOCOL}://${HOST}/api/authentication/delete`,
    USERINFO: `${PROTOCOL}://${HOST}/api/authentication/getuserinfo`,
    LOGOUT: `${PROTOCOL}://${HOST}/api/logout`
}

export default endpoints;