import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from 'src/app/models/person';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private peopleUrl = 'http://localhost:3000/people';  // URL to web api

  constructor(private http: HttpClient) { }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person);
  }

  read(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.peopleUrl}/${id}`);
  }
  updatePerson(person: Person): Observable<any> {
    return this.http.put(`${this.peopleUrl}/${person.id}`, person);
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.peopleUrl}/${id}`);
  }

  list(): Observable<Person[]> {
    return Observable.create((observer) => {
      observer.next([
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
      ]);
    });
    //return this.http.get<Person[]>(this.peopleUrl); 
  }

}

