import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Person } from 'src/app/models/person';

import { PeopleState } from '../../store/state';
import { selectPeople } from '../../store/selectors';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list-example.component.html',
  styleUrls: ['./people-list-example.component.css']
})
export class PeopleListExampleComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(
    private store$: Store<PeopleState>
  ) { }

  ngOnInit() {
    this.people$ = this.store$.pipe(select(selectPeople));
  }

}
