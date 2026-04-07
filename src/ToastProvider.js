import React, { useState, useCallback, useEffect } from 'react';
import ToastComponent from './Toast';
import { setToastRef } from './ToastManager';

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const show = useCallback((message, type = 'info', position = 'bottom') => {
        setToast({ message, type, position });

        setTimeout(() => {
            setToast(null);
        }, 3000);
    }, []);

    // global ref
    useEffect(() => {
        setToastRef({ show });
    }, [show]);

    return (
        <>
            {children}
            {toast && (
                <ToastComponent
                    {...toast}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    );
};