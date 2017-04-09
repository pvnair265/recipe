import { Component, OnInit } from '@angular/core';
import { RecipeServices } from '../../shared/recipes.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

id: number;
details;
private sub: any;

  constructor(private recipeservice: RecipeServices, private route: ActivatedRoute) { }

  ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
     this.id = +params['id'];
     this.getDetails(this.id);
   })
  }

  getDetails(id) {
   this.details = this.recipeservice.getRecipes().filter(function(e,i,a){
      return e.id === id;
   })
  }

}
