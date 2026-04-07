let toastRef = null;

export const setToastRef = (ref) => {
    toastRef = ref;
};

export const Toast = {
    show: (message, type = 'info', position = 'bottom') => {
        toastRef?.show(message, type, position);
    },

    success: (message, position) => {
        toastRef?.show(message, 'success', position);
    },

    error: (message, position) => {
        toastRef?.show(message, 'error', position);
    },

    info: (message, position) => {
        toastRef?.show(message, 'info', position);
    },
};