import { toast } from "react-toastify";

export const ToastMessage = (message: string, type: any) =>
  toast(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    type: type,
    theme: "colored",
  });
