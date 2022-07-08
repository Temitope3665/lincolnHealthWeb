import * as yup from "yup";
import YupPassword from 'yup-password';

YupPassword(yup);

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});

export const EmailSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const SignUpSchema = yup.object().shape({
  first_name: yup.string().required().required(),
  last_name: yup.string().required().required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});

export const ResetPasswordSchema = yup.object().shape({
  newPassword: yup.string().password().min(6).required(),
  confirmPassword: yup.string()
    .test('passwords-match', 'Passwords must match', function (value) { return this.parent.newPassword === value; }),
});

export const AppointmentSchema = yup.object().shape({
  name: yup.string().required(),
  tel: yup.number().required()
});