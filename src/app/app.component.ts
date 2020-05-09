import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    
    {
      title: 'Lulianna Lewandowska (wysoka)',
      imageUrl: 'assets/2.jpg',
      username: '@znana jako Pitbul',
      content: 'Poszukiwane za zabujstwo ukrainca'
    },
    {
      title: 'Karolina Lewandowska (niska)',
      imageUrl: 'assets/3.jpg',
      username: 'znana jako Ryba',
      content: ' Poszukiwane za zabujstwo ukrainca'
    },
    
]
}
