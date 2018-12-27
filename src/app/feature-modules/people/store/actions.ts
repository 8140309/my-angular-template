import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Person } from 'src/app/models/Person';

export enum PeopleActionsType {
    FAILURE = '[People] FAILURE',
    CREATE_REQUEST = '[People] Create Request',
    CREATE_SUCCESS = '[People] Create Success',
    READ_REQUEST = '[People] Read Request',
    READ_SUCCESS = '[People] Read Success',
    UPDATE_REQUEST = '[People] Update Request',
    UPDATE_SUCCESS = '[People] Update Success',
    DELETE_REQUEST = '[People] Delete Request',
    DELETE_SUCCESS = '[People] Delete Success',
    LIST_REQUEST = '[People] List Request',
    LIST_SUCCESS = '[People] List Success',
}

export class CreateRequest implements Action {
    readonly type = PeopleActionsType.CREATE_REQUEST;
    constructor(public payload: Person) { }
}

export class CreateSucess implements Action {
    readonly type = PeopleActionsType.CREATE_SUCCESS;
    constructor(public payload: Person) { }
}

export class ReadRequest implements Action {
    readonly type = PeopleActionsType.READ_REQUEST;
    constructor(public payload: number) { }
}

export class ReadSuccess implements Action {
    readonly type = PeopleActionsType.READ_SUCCESS;
    constructor(public payload: Person) { }
}

export class UpdateRequest implements Action {
    readonly type = PeopleActionsType.UPDATE_REQUEST;
    constructor(public payload: Person) { }
}

export class UpdateSuccess implements Action {
    readonly type = PeopleActionsType.UPDATE_SUCCESS;
    constructor(public payload: Update<Person>) { }
}

export class DeleteRequest implements Action {
    readonly type = PeopleActionsType.DELETE_REQUEST;
    constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
    readonly type = PeopleActionsType.DELETE_SUCCESS;
    constructor(public payload: number) { }
}

export class ListRequest implements Action {
    readonly type = PeopleActionsType.LIST_REQUEST;
    constructor(public payload = null) { }
}

export class ListSuccess implements Action {
    readonly type = PeopleActionsType.LIST_SUCCESS;
    constructor(public payload: Person[]) { }
}

export class Failure implements Action {
    readonly type = PeopleActionsType.FAILURE;
    constructor(public payload: { concern: 'CREATE' | 'UPDATE', error: any }) { }
}

export type PeopleActions = Failure |
    CreateRequest | CreateSucess |
    ReadRequest | ReadSuccess |
    UpdateRequest | UpdateSuccess |
    DeleteRequest | DeleteSuccess |
    ListRequest | ListSuccess;
