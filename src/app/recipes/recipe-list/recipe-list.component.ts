import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../../shared/recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe(1,'pizza', 'Dominos Pizza', 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png'),
  //   new Recipe(2,'pasta', 'Pasta Description', 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png'),
  //   new Recipe(3,'sandwich', 'sandwich Description', 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png')
  // ];
  constructor(private recipeservice: RecipeServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.recipes = this.recipeservice.getRecipes();
  }

  onNewrecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
