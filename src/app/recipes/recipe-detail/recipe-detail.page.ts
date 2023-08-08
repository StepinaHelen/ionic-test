import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe | undefined;
  recipeId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.params?.['recipeId'];
    if (this.recipeId) {
      this.recipe = this.recipesService.getRcipe(this.recipeId);
    }
  }

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Are u sure?',
        message: 'Do u really want to delete?',
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.recipeId);
              console.log(this.recipeId, this.recipesService.getAllRcipes());
              this.router.navigate(['recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
