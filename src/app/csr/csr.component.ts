import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {

  results: number[];
  dataSource;

  constructor() { 
    let size = 100000;
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
    this.dataSource = this.results;
  }

  ngOnInit() {
  }

  getRandomValue(bound) : number {
    return Math.floor(Math.random() * Math.floor(bound));
  }

}