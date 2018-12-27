import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { PeopleActionsType,ListSuccess, ListRequest, CreateRequest, CreateSucess, Failure, ReadRequest, ReadSuccess, UpdateRequest, UpdateSuccess, DeleteRequest, DeleteSuccess } from './actions';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Injectable()
export class PeopleEffects {

    constructor(private service: PersonService, private actions$: Actions) { }

    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType(PeopleActionsType.CREATE_REQUEST),
        map((action: CreateRequest) => action.payload),
        switchMap((person: Person) => this.service.create(person)),
        map((createdPerson: Person) => new CreateSucess(createdPerson)),
        catchError(err => {
            alert(err['message']);
            return of(new Failure({ concern: 'CREATE', error: err }));
        })
    );

    @Effect()
    read$: Observable<Action> = this.actions$.pipe(
        ofType(PeopleActionsType.READ_REQUEST),
        map((action: ReadRequest) => action.payload),
        switchMap(id => this.service.read(id)),
        map((person: Person) => new ReadSuccess(person)),
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(PeopleActionsType.UPDATE_REQUEST),
        map((action: UpdateRequest) => action.payload),
        switchMap((person: Person) => this.service.updatePerson(person)),
        map((updatedPerson: Person) => new UpdateSuccess({
            id: updatedPerson.id,
            changes: updatedPerson
        })),
        catchError(err => {
            alert(err['message']);
            return of(new Failure({ concern: 'UPDATE', error: err }));
        })
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(PeopleActionsType.DELETE_REQUEST),
        map((action: DeleteRequest) => action.payload),
        switchMap((id: number) => this.service.deletePerson(id).pipe(
            map(() => new DeleteSuccess(id))
        ))
    );

    @Effect()
    list: Observable<Action> = this.actions$.pipe(
        ofType(PeopleActionsType.LIST_REQUEST),
        startWith(new ListRequest()),
        switchMap(_ => this.service.list()),
        map((People: Person[]) => new ListSuccess(People)),
    );
}
