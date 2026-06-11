import { useQuery } from "@tanstack/react-query";
import { commentApi } from "./api/commentApi";
import { IComResponse } from "./type/type";

export const useGetComments = () =>
  useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await commentApi.get<IComResponse>("/");
      return response.data.data;
    },
  });
