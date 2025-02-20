"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();  // استخدام useNavigate بدلاً من useRouter
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setStatus(""); 
      try {
        console.log("Logging in...", values);
        await new Promise((resolve) => setTimeout(resolve, 2000));  // محاكاة عملية الدخول

        navigate("/overview");  // استخدام navigate للتنقل إلى الصفحة المطلوبة
      } catch (error) {
        console.error("Login error:", error);
        setStatus("Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        {status && <p className="text-red-500 text-sm text-center mb-4">{status}</p>}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className={clsx(
                "w-full p-2 border rounded-md",
                formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...formik.getFieldProps("password")}
              className={clsx(
                "w-full p-2 border rounded-md",
                formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={loading || !formik.isValid}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
