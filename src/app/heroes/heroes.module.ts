import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing/heroes-routing.module';

import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import { HeroService } from './hero.service';



@NgModule({
  declarations: [
    HeroesListComponent,
    HeroesDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
