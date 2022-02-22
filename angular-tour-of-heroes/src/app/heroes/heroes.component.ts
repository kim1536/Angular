import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero? : Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  };

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  };

  // TODO 
  /*Observable(이밴트를 추상화), of함수(뭐임?) subscribe() <- Observable 호출 */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  };
}
