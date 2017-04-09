import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { DropdownDirective } from './shared/dropdown.directives';
import { RecipeServices } from './shared/recipes.services';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';

const appRouting: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipesComponent, children: [
    {path: 'new', component: NewRecipeComponent},
    {path: ':id', component: RecipeDetailsComponent }
  ] },
  {path: 'shopping', component: ShoppingListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    DropdownDirective,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [RecipeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
