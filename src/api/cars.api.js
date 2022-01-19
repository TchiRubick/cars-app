import { queryApiCall } from './api';

export const get = (page) => queryApiCall('GET', '/api/cars', { page });

export const getOne = (id) => queryApiCall('GET', `/api/car/comments/${id}`, {});
