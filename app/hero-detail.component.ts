import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId:module.id,
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click) = "goBack()">Back</button>
    </div>
  `,
  styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService:HeroService,
    private activatedRoute:ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit():void {
    this.activatedRoute.params.forEach((params:Params)=>{
      let id = +params['id'];
      this.heroService.getHero(id).then(hero=>this.hero=hero);
    });
  }

  goBack():void {
    this.location.back();
  }

}