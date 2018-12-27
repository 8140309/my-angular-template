import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';

import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: './feature-modules/heroes/heroes.module#HeroesModule',
    data: { preload: false },
  },
  {
    path: 'module2',
    loadChildren: './feature-modules/people/people.module#PeopleModule',
    data: { preload: false },
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  exports: [
    RouterModule
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
