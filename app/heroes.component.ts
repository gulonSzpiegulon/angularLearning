import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	public heroes: Hero[];
	selectedHero: Hero;
	
	ngOnInit() {
		this.getHeroes();
	}
	
	constructor(private router: Router, private heroService: HeroService) {
		
	}
	
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	selectHero(hero: Hero) {
		this.selectedHero = hero;
	}
	
	gotoDetail() {
		let link = ['HeroDetail', {id: this.selectedHero.id}];
		this.router.navigate(link);
	}
}