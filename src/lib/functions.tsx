import axios from "axios";
import { API_ENDPOINT_FILTER } from "./configApi";

export const handleDataFilterToExport = async (date: string, loading: (isLoading: boolean) => void) => {
    loading(true);
    let response;
    try {
        response = await axios.get(API_ENDPOINT_FILTER + date); // Espera a que se resuelva la promesa
    } catch (e) {
        console.error("Error fetching data:", e);
    } finally {
        loading(false); // Indica que la carga ha terminado
    }

    return response;
};