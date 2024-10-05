import { Component, OnInit } from '@angular/core';
import { createApi } from 'unsplash-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngDash';
  unsplash = createApi({
    accessKey: 'YO4lZLossOR5Kd-07E6mqC4BhotE6LHl5kw2fsG3XqY',
  });
  ngOnInit(): void {
    const res = this.unsplash.photos.getRandom({ count: 1 });
    res.then((x) => console.log(x.response));
  }
}
