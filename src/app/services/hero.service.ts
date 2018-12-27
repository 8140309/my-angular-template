import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api

  constructor(private http: HttpClient) { }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  read(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero);
  }

  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`);
  }

  list(): Observable<Hero[]> {
    return Observable.create((observer) => {
      observer.next([
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
      ]);
    });
    //return this.http.get<Hero[]>(this.heroesUrl); 
  }

}
