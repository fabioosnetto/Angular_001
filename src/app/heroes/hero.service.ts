import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _heroes: any[] = [
    {id: 1, name: 'miranha',        phone: '0000-0000'},
    {id: 2, name: 'homem de lata',  phone: '0000-0001'},
    {id: 3, name: 'capitão áfrica', phone: '0000-0002'}
  ] 


  getHeroes(){
    return this._heroes;
  }

  getHeroe(id: number){
    for (const h of this._heroes) {
      if(h.id == id){return h;}
    }
    
    return null;
  }

  constructor() { }
}
