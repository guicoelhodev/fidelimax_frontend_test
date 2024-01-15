import { fideliMaxAPI } from "@/services/axios";

export const getErrorResponseModal = async () => {
  try {
    const response = await fideliMaxAPI.get<{ error: string; warning: string }>(
      "/front-test/survey-post-error.json"
    );
    return response.data;
  } catch (error) {
    throw new Error("Something went wrong, please try again later");
  }
};
