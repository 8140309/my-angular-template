import { Hero } from 'src/app/models/hero';
import { createEntityAdapter, EntityAdapter, EntityState, Dictionary } from '@ngrx/entity';
import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';

export interface HeroesState extends EntityState<Hero> {
    isLoading: boolean;
    currentHeroId: number;
}

export const heroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: HeroesState = heroAdapter.getInitialState({
    isLoading: false,
    currentHeroId: undefined
});





