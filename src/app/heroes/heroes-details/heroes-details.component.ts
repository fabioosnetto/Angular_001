import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit, OnDestroy{
  
  hero: any;
  subscription!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _heroservice: HeroService
  ){

  }
  
  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      (params: any) => {
        let id = params.id;

        this.hero = this._heroservice.getHeroe(id);

        if(this.hero == null){this._router.navigate(['**'])}
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
