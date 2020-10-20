import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr',
  templateUrl: './csrBlankSmall.component.html',
  styleUrls: ['./csrBlankSmall.component.css']
})
export class CsrBlankSmallComponent implements OnInit {

  results: number[];

  constructor() { 
    let size = 50;
    this.results = new Array(20);
    let allResults = new Array(size);
    for (let i = 0; i < size; i++) {
        allResults[i] = this.getRandomValue(1000000);
    }
    
    for (let index = 1; index < size; ++index) {
        let value = allResults[index];
        let previousIndex = index - 1;
        while (previousIndex >= 0 && allResults[previousIndex] > value) {
            allResults[previousIndex + 1] = allResults[previousIndex];
            previousIndex = previousIndex - 1;
        }
        allResults[previousIndex + 1] = value;
    }
    
    for (let i = 0; i < 20; i++) {
        this.results[i] = allResults[size - 1 - i];
    }

  }

  ngOnInit() {
  }

  getRandomValue(bound) : number {
    return Math.floor(Math.random() * Math.floor(bound));
  }

}