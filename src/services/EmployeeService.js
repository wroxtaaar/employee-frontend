// import axios from "axios";

// const REST_API_BASE_URL =
//   "http://localhost:8080/api/employees" ||
//   "https://employee-backend-9cgj.onrender.com/api/employees";

// export const listEmployees = () => axios.get(REST_API_BASE_URL);

// export const createEmployee = (employee) =>
//   axios.post(REST_API_BASE_URL + "/create", employee);

// export const getEmployee = (employeeId) =>
//   axios.get(REST_API_BASE_URL + "/" + employeeId);

// export const updateEmployee = (employeeId, employee) =>
//   axios.put(REST_API_BASE_URL + "/update/" + employeeId, employee);

// export const deleteEmployee = (employeeId) =>
//   axios.delete(REST_API_BASE_URL + "/delete/" + employeeId);

import axios from "axios";

const LOCAL = "http://localhost:8080/api/employees";
const PROD = "https://employee-backend-9cgj.onrender.com/api/employees";

const api = axios.create({ baseURL: LOCAL });

// If localhost fails, switch to production
api.interceptors.response.use(
  (res) => res,
  () => {
    api.defaults.baseURL = PROD;
    return api;
  }
);

export const listEmployees = () => api.get("");
export const createEmployee = (employee) => api.post("/create", employee);
export const getEmployee = (id) => api.get(`/${id}`);
export const updateEmployee = (id, employee) => api.put(`/update/${id}`, employee);
export const deleteEmployee = (id) => api.delete(`/delete/${id}`);
