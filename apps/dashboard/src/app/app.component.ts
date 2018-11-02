import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Core Sample App';

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/customers', icon: 'face', title: 'Customer'},
    { path: '/projects', icon: 'work', title: 'Projects'},
    { path: '/documentation', icon: 'note', title: 'Documentation'},
    { path: './getstarted', icon: 'note', title: 'Getstarted'},
    { path: './partone', icon: 'note', title: 'Partone'},
    { path: './parttwo', icon: 'note', title: 'Parttwo'},
  ]
}
