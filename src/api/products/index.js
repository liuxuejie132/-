import axios from "axios";

export const fetchData = () => axios.get("/api/data/index.json");
