import {Component, OnInit, ViewChild} from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('child1') // 模板本地变量
  child1: Child2Component; // 在父组件里,获得一个子组件的引用

  constructor() {

  }

  ngOnInit() {
    this.child1.greeting('Tom'); // 通过模板变量的名字来使用子组件
  }
}
