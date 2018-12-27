import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Hero } from 'src/app/models/hero';

export enum HeroesActionsType {
    FAILURE = '[Heroes] FAILURE',
    CREATE_REQUEST = '[Heroes] Create Request',
    CREATE_SUCCESS = '[Heroes] Create Success',
    READ_REQUEST = '[Heroes] Read Request',
    READ_SUCCESS = '[Heroes] Read Success',
    UPDATE_REQUEST = '[Heroes] Update Request',
    UPDATE_SUCCESS = '[Heroes] Update Success',
    DELETE_REQUEST = '[Heroes] Delete Request',
    DELETE_SUCCESS = '[Heroes] Delete Success',
    LIST_REQUEST = '[Heroes] List Request',
    LIST_SUCCESS = '[Heroes] List Success',
}

export class CreateRequest implements Action {
    readonly type = HeroesActionsType.CREATE_REQUEST;
    constructor(public payload: Hero) { }
}

export class CreateSucess implements Action {
    readonly type = HeroesActionsType.CREATE_SUCCESS;
    constructor(public payload: Hero) { }
}

export class ReadRequest implements Action {
    readonly type = HeroesActionsType.READ_REQUEST;
    constructor(public payload: number) { console.log(payload)}
}

export class ReadSuccess implements Action {
    readonly type = HeroesActionsType.READ_SUCCESS;
    constructor(public payload: Hero) { }
}

export class UpdateRequest implements Action {
    readonly type = HeroesActionsType.UPDATE_REQUEST;
    constructor(public payload: Hero) { }
}

export class UpdateSuccess implements Action {
    readonly type = HeroesActionsType.UPDATE_SUCCESS;
    constructor(public payload: Update<Hero>) { }
}

export class DeleteRequest implements Action {
    readonly type = HeroesActionsType.DELETE_REQUEST;
    constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
    readonly type = HeroesActionsType.DELETE_SUCCESS;
    constructor(public payload: number) { }
}

export class ListRequest implements Action {
    readonly type = HeroesActionsType.LIST_REQUEST;
    constructor(public payload = null) { }
}

export class ListSuccess implements Action {
    readonly type = HeroesActionsType.LIST_SUCCESS;
    constructor(public payload: Hero[]) { }
}

export class Failure implements Action {
    readonly type = HeroesActionsType.FAILURE;
    constructor(public payload: { concern: 'CREATE' | 'UPDATE', error: any }) { }
}

export type HeroesActions = Failure |
    CreateRequest | CreateSucess |
    ReadRequest | ReadSuccess |
    UpdateRequest | UpdateSuccess |
    DeleteRequest | DeleteSuccess |
    ListRequest | ListSuccess;
