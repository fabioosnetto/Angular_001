import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{

  constructor(
    private _heroservice: HeroService,
    private _route: ActivatedRoute
  ){

  }

  heroes: any[] = [];
 
  ngOnInit(): void {
    this.heroes = this._heroservice.getHeroes();
  }
}
