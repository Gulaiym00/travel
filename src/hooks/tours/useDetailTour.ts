import { useQuery } from "@tanstack/react-query";
import { travelApi } from "../api/travelApi";

const getOneTour = async (id: string) => {
  const response = await travelApi.get(`/${id}`);
//   console.log(res.data);
  return response.data.data;
};

export const useDetailTour= (id: string) => {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: () => getOneTour(id),
    enabled: !!id,
  });
};
