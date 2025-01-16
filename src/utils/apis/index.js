import { authAxiousInstance1, axiosMultiPartFormData1 } from "./apis";

export const endPoints = {
    TRIGGER_OTP: '/mobileAPI/otp-request',
    SUBJECTS_LIST: '/api/subject',
    CLASSES_LIST: 'mobileAPI/classroom',
    ADD_HOME_WORK: '/mobileAPI/homework',
    TEACHERS_LIST: '/api/teacher',
    ADD_TEACHER: '/api/teacher',
    BANNERS: '/mobileAPI/bannerImages',
    ADD_BANNERS: '/api/bannerImage',
    ALL_CLASS_ROOMS: '/mobileAPI/classroom',
    ADD_ROLES: '/api/roles',

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
export const SUBJECTS = async () => {
    try {
        let result = await axiosMultiPartFormData1.get(
            `${endPoints.SUBJECTS_LIST}`
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};

export const ClassRooms = async () => {
    try {
        let result = await axiosMultiPartFormData1.get(
            `${endPoints.CLASSES_LIST}`,
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};

export const AddStudentHomeWork = async data => {
    try {
        let result = await axiosMultiPartFormData1.post(
            `${endPoints.ADD_HOME_WORK}`, data
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};

export const TeacherList = async () => {
    try {
        let result = await axiosMultiPartFormData1.get(
            `${endPoints.TEACHERS_LIST}`
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};
export const AddTeachers = async (data) => {
    try {
        let result = await axiosMultiPartFormData1.post(
            `${endPoints.ADD_TEACHER}`, data
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};

export const Add_Roles = async () => {
    try {
        let result = await axiosMultiPartFormData1.get(
            `${endPoints.ADD_ROLES}`
        );
        return result;
    } catch (error) {
        return error.response.data;
    }
};
