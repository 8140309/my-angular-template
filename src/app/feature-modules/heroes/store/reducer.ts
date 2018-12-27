import { HeroesState, initialState, heroAdapter } from './state';
import { HeroesActions, HeroesActionsType, ListSuccess } from './actions';

export function heroesReducer(state: HeroesState = initialState, { type, payload }: HeroesActions): HeroesState {
    switch (type) {
        case HeroesActionsType.CREATE_SUCCESS:
            return heroAdapter.addOne(payload, state);
        case HeroesActionsType.READ_SUCCESS:
            return heroAdapter.addOne(payload, { ...state, currentHeroId: payload.id });
        case HeroesActionsType.UPDATE_SUCCESS:
            return heroAdapter.updateOne(payload, state);
        case HeroesActionsType.DELETE_SUCCESS:
            return heroAdapter.removeOne(payload, state);
        case HeroesActionsType.LIST_SUCCESS:
            return heroAdapter.addAll(payload, state);
        default:
            return state;
    }
}
