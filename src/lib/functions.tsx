import axios from "axios";
import { API_ENDPOINT_FILTER } from "./configApi";

export const handleDataFilterToExport = async (date: string, loading: (isLoading: boolean) => void) => {
    loading(true);
    let response;
    try {
        response = await axios.get(API_ENDPOINT_FILTER + date);
    } catch (e) {
        console.error("Error fetching data:", e);
    } finally {
        loading(false);
    }

    return response;
};