import { getAuthTokenDetails } from "../preferences/local_storage";
// import base64 from 'base-64';
import axios from 'axios';
export const BASE_URL = 'http://147.79.71.252:3000';


//end points//

let bearer_token = getAuthTokenDetails();

export const authAxiousInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Authorization: 'Basic' + base64.encode('skillrat-client:skillrat@2021'),
    },
});

export const authAxiousInstance1 = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});