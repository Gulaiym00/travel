"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { travelApi } from "../api/travelApi";
import { PRODUCTS_QUERY_KEY } from "@/utils/admin";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async (id: number) => {
      const response = await travelApi.delete(`/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
};
