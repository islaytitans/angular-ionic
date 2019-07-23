import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Burger',
      imageUrl: 'https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612',
      ingredients: ['Bun', 'Beef patty', 'Lettuce', 'Burger sauce']
    },
    {
      id: 'r2',
      title: 'Hotdog',
      imageUrl: 'https://the-oasis-107415.square.site/uploads/1/2/5/3/125360156/s436006772643584401_p25_i1_w1200.jpeg',
      ingredients: ['Bun', 'Pork sausage', 'Mustard']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
    })};
  }
}
