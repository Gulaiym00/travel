import { Products } from "./type";

export interface ITourState {
  tours: Products[];
  addToTour: (item: Products) => void;
  removeTour: (id: number) => void;
}
