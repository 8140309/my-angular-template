import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Person } from 'src/app/models/Person';

export interface PeopleState extends EntityState<Person> {
    currentPersonId: number;
}

export const personAdapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const initialState: PeopleState = personAdapter.getInitialState({
    currentPersonId: undefined
});