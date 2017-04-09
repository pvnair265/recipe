import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable()

export class RecipeServices {
total: number;    
recipes: Recipe[] = [{
    'id' : 1,
    'name': 'Pizza',
    'description': 'Pizza Description',
    'imagePath': 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png'
},
{
    'id' : 2,
    'name': 'Pasta',
    'description': 'Pasta Description',
    'imagePath': 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png'
},
{
    'id' : 3,
    'name': 'Sandwich',
    'description': 'Sandwich Description',
    'imagePath': 'https://pe-wbcm.s3.amazonaws.com/media/1080/recipes.png'
}]

constructor(private http: Http) {
    console.log('service initialized');
}

getRecipes() {
    return this.recipes;
}

addRecipe(data) {
    console.log(data);
this.total = this.recipes.length;

    var newObj = {
        id: this.total+1,
        name: data.name,
        description: data.description,
        imagePath: data.image
    }
    this.recipes.push(newObj);
    this.getRecipes();

}


}

