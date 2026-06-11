"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { travelApi } from "../api/travelApi";
import { Product } from "../type/type";
import { PRODUCTS_QUERY_KEY } from "@/utils/admin";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (body: Product) => {
      const response = await travelApi.post("/", body);
      return response.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
};
