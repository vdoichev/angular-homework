import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css'],
})
export class Task4Component {
  linesArray: string[] = ['Line 1', 'Line 2', 'Line 3'];

  colorsArray: string[] = ['blue', 'red', 'green', 'gold'];

  currentColor: number = 0;

  changeMethod(value: number) {
    this.currentColor = value;
  }
}
