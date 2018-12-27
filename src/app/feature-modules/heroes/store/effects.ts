import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { ListSuccess, HeroesActionsType, ListRequest, CreateRequest, CreateSucess, Failure, ReadRequest, ReadSuccess, UpdateRequest, UpdateSuccess, DeleteRequest, DeleteSuccess } from './actions';
import { Hero } from 'src/app/models/hero';
import { HeroService } from '../../../services/hero.service';

@Injectable()
export class HeroesEffects {

    constructor(private service: HeroService, private actions$: Actions) { }

    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActionsType.CREATE_REQUEST),
        map((action: CreateRequest) => action.payload),
        switchMap((hero: Hero) => this.service.create(hero)),
        map((createdHero: Hero) => new CreateSucess(createdHero)),
        catchError(err => {
            alert(err['message']);
            return of(new Failure({ concern: 'CREATE', error: err }));
        })
    );

    @Effect()
    read$: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActionsType.READ_REQUEST),
        map((action: ReadRequest) => action.payload),
        switchMap(id => this.service.read(id)),
        map((hero: Hero) => new ReadSuccess(hero)),
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActionsType.UPDATE_REQUEST),
        map((action: UpdateRequest) => action.payload),
        switchMap((hero: Hero) => this.service.updateHero(hero)),
        map((updatedHero: Hero) => new UpdateSuccess({
            id: updatedHero.id,
            changes: updatedHero
        })),
        catchError(err => {
            alert(err['message']);
            return of(new Failure({ concern: 'UPDATE', error: err }));
        })
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActionsType.DELETE_REQUEST),
        map((action: DeleteRequest) => action.payload),
        switchMap((id: number) => this.service.deleteHero(id).pipe(
            map(() => new DeleteSuccess(id))
        ))
    );

    @Effect()
    list: Observable<Action> = this.actions$.pipe(
        ofType(HeroesActionsType.LIST_REQUEST),
        startWith(new ListRequest()),
        switchMap(_ => this.service.list()),
        map((heroes: Hero[]) => new ListSuccess(heroes)),
    );
}
