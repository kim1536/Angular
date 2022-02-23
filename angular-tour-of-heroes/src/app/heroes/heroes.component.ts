import { Component, OnInit } from '@angular/core';
import { Hero } from './entity/hero';
import { HeroService } from './service/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  };

  add (name:string): void{
    name = name.trim();
    if (!name) { return }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // TODO 
  /*Observable(이밴트를 추상화; DB데이터를 찾는다), of함수(DB데이터를 담는다) subscribe(Observable의 of함수에 담은 데이터를 호출)  */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  };
}
