import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "./api/commentApi";
import { IComments } from "./type/type";

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["Add comment"],
    mutationFn: async (body: IComments) => {
      const response = await commentApi.post("/", body);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};
