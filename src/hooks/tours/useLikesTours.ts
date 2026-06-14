import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ITourState } from "../type/typesTour";

export const useLikesTours = create<ITourState>()(
  persist(
    (set) => ({
      tours: [],
      addToTour: async (item) => {
        set((state) => ({
          tours: state.tours.some((tour) => tour._id === item._id)
            ? state.tours
            : [...state.tours, item],
        }));
      },
      removeTour: async (id) => {
        set((state) => ({
          tours: state.tours.filter((item) => item._id !== id),
        }));
      },
    }),
    {
      name: "tours",
    },
  ),
);
