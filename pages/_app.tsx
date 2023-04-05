import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouteGuard } from "@/component/RouteGauard";
import { Suspense, useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="center">
          <h3>Loading...</h3>
        </div>
      ) : (
        <>
          <ToastContainer />
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </>
      )}
    </>
  );
}
