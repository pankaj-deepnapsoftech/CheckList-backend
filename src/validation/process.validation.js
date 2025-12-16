import * as yup from "yup";

export const processValidationSchema = yup.object({
  process_name: yup
    .string()
    .required("Process name is required"),

  process_no: yup
    .string()
    .required("Process number is required"),

  responsibility: yup
    .string()
    .nullable()
    .matches(
      /^[0-9a-fA-F]{24}$/,
      "Responsibility must be a valid ObjectId"
    )
});
