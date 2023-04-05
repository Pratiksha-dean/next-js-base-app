import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import { forgotPassword, login } from "@/pages/api/request";
import { ToastMessage } from "@/component/ToastMessage";
import { useEffect, useState } from "react";
import clsx from "clsx";

import {
  getCreds,
  getToken,
  rememberCreds,
  removeCreds,
  setToken,
} from "@/component/Constant";
import Loader from "@/component/Loader";

export default function ForgotPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    mobile: "",
  };


  const validationSchema = Yup.object({
    mobile: Yup.number().required("Phone number is required"),
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h3 className="card-title text-center mb-5">
                    Forgot Password?
                  </h3>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setLoading(true);
                      forgotPassword(values)
                        .then((resp) => {
                          ToastMessage(
                            "Password reset link sent successfully!",
                            "success"
                          );
                        //   router.push("/login");
                        })
                        .catch((err) => {
                          setLoading(false);
                          ToastMessage(err.response.data.error, "error");
                        });
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }: /* and other goodies */
                    any) => (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="email">
                            Mobile Number
                          </label>
                          <div className="form-outline">
                            <input
                              type="number"
                              name="mobile"
                              className={clsx(
                                "form-control ",
                                {
                                  "is-invalid":
                                    touched["mobile"] && errors["mobile"],
                                },
                                {
                                  "is-valid":
                                    touched["mobile"] && !errors["mobile"],
                                }
                              )}
                              id="floatingInput"
                              placeholder="Enter mobile number"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mobile}
                            />
                            {touched.mobile && errors.mobile ? (
                              <div className="invalid-feedback">
                                {errors.mobile}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-login text-uppercase fw-bold"
                            type="submit"
                            disabled={loading}
                          >
                            {loading && <Loader color="light" size="sm" />}
                            <span className="mx-1">Submit</span>
                          </button>
                        </div>
                        <hr />
                        <div className="text-center">
                          <label>
                            Back to Login?{" "}
                            <Link href="login" className="my-2">
                              Click Here
                            </Link>
                          </label>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
