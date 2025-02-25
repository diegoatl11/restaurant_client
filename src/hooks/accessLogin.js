import { useState, useCallback, useEffect } from "react";
import { getAccessLogin } from "../components/request/getAccessLogin.js";

const useAccessLogin = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useCallback(async (loginData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAccessLogin(loginData);
            setData(response);
            return response;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        data,
        loading,
        error,
        login,
    };
};

export default useAccessLogin;
