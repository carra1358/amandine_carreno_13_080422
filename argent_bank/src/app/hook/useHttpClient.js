import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import api from "app/api/api"
import store from "../redux/store"

/**
 * Customs hook taking care of client request,listening and updating client authorisation
 * It calls the function api in a object and fill it with request response;
 * @return {object} request response || null
 */
const useHttpClient = () => {

    const user = useSelector(state => state.user)

    const [token, setToken] = useState(user.userAuth?.token ?? null)
    const isTokenValid = user.userAuth?.token;
    const client = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    useEffect(() => {
        store.subscribe(() => {

            if (token !== isTokenValid) {
                setToken(isTokenValid)

            }
        })
    }, [token, isTokenValid])

    useEffect(() => {

        if (token !== isTokenValid) {
            setToken(isTokenValid)

        }


    }, [token, isTokenValid])

    return {
        ...api(client),
    }
}

export default useHttpClient;
