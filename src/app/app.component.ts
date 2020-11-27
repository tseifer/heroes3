import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes & Clients';

  showAddHero=true;


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
  }
}
