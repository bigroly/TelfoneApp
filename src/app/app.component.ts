import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IappState  } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TelfoneApp';

  constructor(private store: Store<IappState>) {}

  ngOnInit() {
  }
}
