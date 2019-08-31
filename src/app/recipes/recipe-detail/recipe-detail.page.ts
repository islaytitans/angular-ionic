import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.activedRoute.paramMap.subscribe(paramMap => {
        if  (!paramMap.has('recipeId')) {
          console.log('No recipeId');
          this.router.navigate(['/recipes']);
          return;
        }

        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Are you sure you want to delete this recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'Cancel'
      },
    {
      text: 'Delete',
      handler: () => {
        this.recipesService.deleteRecipe(this.loadedRecipe.id);
        console.log(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]}).then(alertElement => {
      alertElement.present();
    });
  }
}
