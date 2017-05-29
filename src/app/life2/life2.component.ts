import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life2',
  templateUrl: './life2.component.html',
  styleUrls: ['./life2.component.css']
})
export class Life2Component implements OnInit {

  greeting = 'hello';

  user: {name: string} = {name: 'Tom'};

  constructor() { }

  ngOnInit() {
  }

}
