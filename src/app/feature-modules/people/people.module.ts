import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PeopleEffects } from './store/effects';
import { peopleReducer } from './store/reducer';
import { PeopleComponent } from './people.component';
import { PeopleListExampleComponent } from './components/people-list-example/people-list-example.component';

const routes: Routes = [{
    path: '',
    component: PeopleComponent,
    children: [
        {
            path: 'list',
            component: PeopleListExampleComponent,
        },
    ]
}];

@NgModule({
    declarations: [
        PeopleComponent,
        PeopleListExampleComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('people', peopleReducer),
        EffectsModule.forFeature([PeopleEffects]),
    ],
    exports: [
        RouterModule
    ]
})
export class PeopleModule {
    constructor() {
        console.log('PeopleModule loaded');
    }
}
