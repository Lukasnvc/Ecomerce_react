import { useMutation } from "react-query";
import { createUser, loginUser } from "../Api/user";

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
