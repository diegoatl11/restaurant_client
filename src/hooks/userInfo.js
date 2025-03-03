import { useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import { getUserInfo } from "../components/request/getUserInfo";

const useUserInfo = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const refetch = useCallback(async (userId) => {
        setLoading(true);
        setError(null);

        try {

        } catch (err) {
            setError({ message: err.message, details: err });
            return null;
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    return useMemo(() => ({
        data,
        loading,
        error,
        getuser: refetch,
    }), [data, loading, error, refetch]);
};

export default useUserInfo;
