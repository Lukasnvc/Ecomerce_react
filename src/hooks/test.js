import { useQuery } from "react-query";
import { fetchTestData } from "../Api/test";

const TEST_DATA = "TEST_DATA";

export const useTestData = () => {
  return useQuery(TEST_DATA, fetchTestData);
};
