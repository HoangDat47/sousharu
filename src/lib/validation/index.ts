import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Tên quá ngắn" }),
  username: z.string().min(2, { message: "Tên quá ngắn" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
});
