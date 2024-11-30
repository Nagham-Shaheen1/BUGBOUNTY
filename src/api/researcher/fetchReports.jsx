import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function FetchReports(activePage) {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/researcher/reports-researcher?page=${activePage}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

