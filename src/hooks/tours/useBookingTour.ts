import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IInformationState } from "../type/typesTour";

export const useBookingTours = create<IInformationState>()(
  persist(
    (set) => ({
      information: [],
      addToInformation: (item) => {
        set((state) => ({
          information: [...state.information, item],
        }));
      },
    }),
    {
      name: "bookingTours",
    },
  ),
);
