import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
//Move content out of the component file
@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService:HeroService, private router:Router) {    
  }
  getHeros():void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit():void{
    this.getHeros();
  }
  gotoDetail():void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}