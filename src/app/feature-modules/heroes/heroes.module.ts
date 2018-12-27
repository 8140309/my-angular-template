import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ExampleComponentComponent } from './components/example-component/example-component.component';
import { heroesReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/effects';

const routes: Routes = [{
  path: '',
  component: HeroesComponent,
  children: [
    {
      path: 'list',
      component: HeroesListComponent,
    },
  ]
}];

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesListComponent,
    ExampleComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('heroes', heroesReducer),
    EffectsModule.forFeature([HeroesEffects]),
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesModule {
  constructor() {
    console.log('HeroesModule loaded');
  }
}
