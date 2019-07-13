import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
