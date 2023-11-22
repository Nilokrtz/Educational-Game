import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full', 
  },
  {
    path: 'worlds',
    loadChildren: () => import('./worlds/worlds.module').then(m => m.WorldsPageModule)
  },{
    path: 'prehistoric-scenery',
    loadChildren: () => import('./prehistoric-scenery/prehistoric-scenery.module').then( m => m.PrehistoricSceneryPageModule)
  },
  {
    path: 'pirates-scenery',
    loadChildren: () => import('./pirates-scenery/pirates-scenery.module').then( m => m.PiratesSceneryPageModule)
  },
  {
    path: 'old-west-scenery',
    loadChildren: () => import('./old-west-scenery/old-west-scenery.module').then( m => m.OldWestSceneryPageModule)
  },
  {
    path: 'moon-scenery',
    loadChildren: () => import('./moon-scenery/moon-scenery.module').then( m => m.MoonSceneryPageModule)
  },
  {
    path: 'middle-age-scenery',
    loadChildren: () => import('./middle-age-scenery/middle-age-scenery.module').then( m => m.MiddleAgeSceneryPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },]
;
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
