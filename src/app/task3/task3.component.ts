import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component {
  constructor() {}

  Image1: string = 'assets/1.jpeg';
  Image1Width: number = 500;
  Image1Height: number = 300;

  index: number = 0;

  ImagesArray: string[] = ['assets/1.jpeg', 'assets/2.jpeg', 'assets/3.jpeg'];

  nextImage() {
    this.index++;
    if (this.index > this.ImagesArray.length-1) {
      this.index = 0;
    }
  }

  prevImage() {
    this.index--;
    if (this.index < 0) {
      this.index = this.ImagesArray.length-1;
    }
  }
}
