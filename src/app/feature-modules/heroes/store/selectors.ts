import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesState, heroAdapter } from './state';
import { Dictionary } from '@ngrx/entity';
import { Hero } from 'src/app/models/hero';

export const selectHeroState: MemoizedSelector<object, HeroesState> = createFeatureSelector<HeroesState>('heroes');

export const selectHeroes: (state: object) => Hero[] = heroAdapter.getSelectors(selectHeroState).selectAll;

export const getCurrentHero = (state: HeroesState): Hero => state.entities[state.currentHeroId];

export const selectCurrentHero = createSelector(selectHeroState, getCurrentHero);
