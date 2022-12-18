export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  timers: number[];
  imageURL: string;
  originalURL: string;
}
export interface Ingredient {
  quantity: string;
  name: string;
  type: string;
}
