import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  item = '';
  items = [];
  newColor: any;

  constructor() {
  }

  randomColor() {
    let lett = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += lett[Math.floor(Math.random() * 16)];
    }
    this.newColor = color;
  }

  submit() {
    if (this.item !== '') {
      this.randomColor();
      this.items.push({name: this.item, color: this.newColor});
    }
    this.item = '';
  }

  delete(e) {
    this.items.splice(e, 1);
  }
}
