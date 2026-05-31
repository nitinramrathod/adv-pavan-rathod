import axios from "axios";

const api = axios.create({ baseURL: "/" });

export const submitContact = (data: any) => api.post("/api/contact", data);
export const submitCallback = (data: any) => api.post("/api/callback", data);
export const getCases = (params?: any) => api.get("/api/cases", { params });
export const getTestimonials = () => api.get("/api/testimonials");
export const getReviews = () => api.get("/api/reviews");

export default api;
