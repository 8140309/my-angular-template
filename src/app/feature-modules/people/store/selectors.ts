import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';

import { PeopleState, personAdapter } from './state';
import { Person } from 'src/app/models/person';

export const selectPersonState: MemoizedSelector<object, PeopleState> = createFeatureSelector<PeopleState>('people');

export const selectPeople: (state: object) => Person[] = personAdapter.getSelectors(selectPersonState).selectAll;

export const getCurrentPerson = (state: PeopleState): Person => state.entities[state.currentPersonId];

export const selectCurrentPerson = createSelector(selectPersonState, getCurrentPerson);