export interface IComResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IComments[];
}

export interface IComments {
  userName: string;
  comment: string;
}

export interface State {
  userName: string;
  comment: string;
}
