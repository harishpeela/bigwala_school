import { authAxiousInstance1 } from "./apis";

export const endPoints = {
    TRIGGER_OTP: '/mobileAPI/otp-request',
};

export const SignIn = async data => {
    console.log('data', data);
    try {
        let result = await authAxiousInstance1.post(
            `${endPoints.TRIGGER_OTP}`,
            data,
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};
