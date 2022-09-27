import { toast } from 'react-toastify';
const options = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
}

const optionsDefault = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const notifyDefault = (text) => {
    return toast(text, optionsDefault);
};

export const notifyInfo = (text) => {
    return toast.info(text, options)
};
export const notifySuccess = (text) => {
    return toast.success(options)
};
export const notifyWarn = (text) => {
    return toast.warn(text, options)
};

export const notifyError = (text) => {
    return toast.error(text, options)
};