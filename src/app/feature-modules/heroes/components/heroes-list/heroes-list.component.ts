import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Hero } from 'src/app/models/hero';

import { HeroesState } from '../../store/state';
import { selectHeroes } from '../../store/selectors';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(
    private store$: Store<HeroesState>
  ) { }

  ngOnInit() {
    this.heroes$ = this.store$.pipe(select(selectHeroes));
  }

}
