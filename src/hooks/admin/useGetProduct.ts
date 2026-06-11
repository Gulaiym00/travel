"use client";
import { useQuery } from "@tanstack/react-query";
import { travelApi } from "../api/travelApi";
import { ResponseCreate } from "../type/type";
import { PRODUCTS_QUERY_KEY } from "@/utils/admin";

export const useGetProduct = () =>
  useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: async () => {
      const response = await travelApi.get<ResponseCreate>("/");
      return response.data.data;
    },
  });
