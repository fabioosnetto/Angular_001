import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from "@angular/router";

import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroesDetailsComponent } from '../heroes-details/heroes-details.component';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroesListComponent, children:[
    {path: ':id', component: HeroesDetailsComponent}
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
