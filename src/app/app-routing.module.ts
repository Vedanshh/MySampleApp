import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/getdata', pathMatch: 'full' },
  //{ path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'getdata', component: FetchDataComponent, canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
