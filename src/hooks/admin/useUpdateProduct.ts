"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Products, UpdateProduct } from "../type/type";
import { travelApi } from "../api/travelApi";
import { PRODUCTS_QUERY_KEY } from "@/utils/admin";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: async ({ id, newProduct }: UpdateProduct) => {
      const response = await travelApi.put(`/${id}`, newProduct);
      return response.data;
    },
    onSuccess: (response, variables) => {
      const updatedProduct = response?.data as Products | undefined;

      if (updatedProduct) {
        queryClient.setQueryData<Products[]>(PRODUCTS_QUERY_KEY, (products) =>
          products?.map((product) =>
            product._id === variables.id
              ? { ...product, ...updatedProduct }
              : product,
          ),
        );
      }

      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
};
