import * as yup from "yup";
import mongoose from "mongoose";

const objectId = yup
  .string()
  .test("is-objectid", "Invalid ObjectId", value =>
    !value || mongoose.Types.ObjectId.isValid(value)
  );

export const userValidationSchema = yup.object({
  full_name: yup
    .string()
    .trim()
    .max(100, "Full name is too long")
    .nullable(),

  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  desigination: yup
    .string()
    .trim()
    .max(100, "Designation is too long")
    .nullable(),

  user_id: yup
    .string()
    .trim()
    .nullable(),

  employee_plant: objectId.nullable(),

  employee_company: objectId.nullable(),

  role: objectId.nullable(),

  terminate: yup
    .boolean()
    .default(false)
});
