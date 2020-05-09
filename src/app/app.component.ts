import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpg',
      username: '@nature',
      content: ' yeaaaaaah I saww this neat tree'
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpg',
      username: '@montainlover',
      content: 'yeaaaaah  I saw this neat mountain'
    },
    {
      title: 'Neat Biking',
      imageUrl: 'assets/biking.jpg',
      username: '@biking',
      content: ' yeaaaaah I saw this neat biking'
    },
    
]
}
