import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouteGuard } from "@/component/RouteGauard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <ToastContainer />
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </>
  );
}
