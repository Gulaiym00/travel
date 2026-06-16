import { Products } from "./type";

export interface ITourState {
  tours: Products[];
  addToTour: (item: Products) => void;
  removeTour: (id: number) => void;
}

export interface IInformationState {
  information: StateTours[];
  addToInformation: (item: StateTours) => void;
}

export interface StateTours {
  name: string;
  email: string;
  number: string;
  date: string;
  count: number;
  totalPrice: number;
}
