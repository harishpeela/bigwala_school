import { PreferencesKeys } from './prferences_keys';
import {
    storeValue,
    getValue,
    storeObject,
    getObject,
} from './asyncStoragePreferences';

export const saveLoginSessionDetails = async (tokenType, authToken) => {
    await storeValue(PreferencesKeys.authToken, tokenType + ' ' + authToken);
};
export const saveClientCredentials = async (tokenType, authToken) => {
    await storeValue(PreferencesKeys.clientToken, tokenType + ' ' + authToken);
};

export const saveUserDetails = async data => {
    await storeObject(PreferencesKeys.userDetails, data);
};
export const getUserDetails = async () => {
    let details = await getObject(PreferencesKeys.userDetails);
    return details;
};
export const getLogionSessionDetails = async () => {
    let authToken = await getValue(PreferencesKeys.authToken);
    return {
        authToken: authToken.value || '',
    };
};
export const getClientCredentials = async () => {
    let clientToken = await getValue(PreferencesKeys.clientToken);
    return {
        clientToken: clientToken.value || '',
    };
};
export const clearAuthToken = async () => {
    await storeValue(PreferencesKeys.authToken, null); // or use `removeValue` if supported
};

export const getAuthTokenDetails = async () => {
    let authToken = await getValue(PreferencesKeys.authToken);
    let bearerToken = authToken.value || '';

    return bearerToken;
};

export const getUserId = async () => {
    let userId = await getValue(PreferencesKeys.userId);
    return userId.value || '';
};

export const removeLoginSessionDetails = async () => {
    await storeValue(PreferencesKeys.BasicAuth, '');
};

export const removeClientCredentials = async () => {
    await storeValue(PreferencesKeys.clientToken, '');
};
