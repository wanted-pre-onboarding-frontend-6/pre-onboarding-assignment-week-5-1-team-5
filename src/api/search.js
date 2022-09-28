import { api } from "./base";

const getRecommendKeywords = (keyword) => {
  const response = api.get(`/sick?q=${keyword}`);
  console.info("calling api");
  return response;
};

export { getRecommendKeywords };
