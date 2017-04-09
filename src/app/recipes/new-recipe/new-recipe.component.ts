import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RecipeServices} from '../../shared/recipes.services';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(private recipeservices: RecipeServices) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm) {
    //console.log(data.value);
    this.recipeservices.addRecipe(data.value);
  }

}
