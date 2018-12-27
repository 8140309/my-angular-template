import { PeopleState, initialState, personAdapter } from './state';
import { PeopleActions, PeopleActionsType } from './actions';

export function peopleReducer(state: PeopleState = initialState, { type, payload }: PeopleActions): PeopleState {
    switch (type) {
        case PeopleActionsType.CREATE_SUCCESS:
            return personAdapter.addOne(payload, state);
        case PeopleActionsType.READ_SUCCESS:
            return personAdapter.addOne(payload, { ...state, currentPersonId: payload.id });
        case PeopleActionsType.UPDATE_SUCCESS:
            return personAdapter.updateOne(payload, state);
        case PeopleActionsType.DELETE_SUCCESS:
            return personAdapter.removeOne(payload, state);
        case PeopleActionsType.LIST_SUCCESS:
            return personAdapter.addAll(payload, state);
        default:
            return state;
    }
}
