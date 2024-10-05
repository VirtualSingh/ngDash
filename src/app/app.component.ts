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
  ngOnInit(): void {}
  getBackground() {
    this.unsplash.photos
      .getRandom({
        orientation: 'landscape',
        count: 1,
      })
      .then((result) => {
        if (result.errors) {
          console.log('Error Occured : ', result.errors);
        } else {
          const photo = Array.isArray(result.response)
            ? result.response[0]
            : result.response;

          if (photo) {
            const imageUrl = `${photo.urls.raw}&w=1920&h=1080&fit=crop`;
            console.log(imageUrl); // URL of the random photo with the desired dimensions
          } else {
            console.error('No photo found in the response.');
          }
        }
      });
  }
}
