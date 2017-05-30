import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('child1') // 模板本地变量
  child1: Child2Component; // 在父组件里,获得一个子组件的引用

  message: string;

  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.child1.greeting('Tom'); // 通过模板变量的名字来使用子组件
    }, 5000);
  }

  // 这两个view方法都是在组件的视图被组装完毕后才调用的
  // 先调用子的,再调用父的,先调用init,再调用checked
  // 以后再改变视图内容,只调用checked,init只调用一次
  // 不要在这两个方法中去改变视图中绑定的东西
  ngAfterViewInit() {
    console.log('父组件的视图初始化完毕');
    // 下面的语句会抛异常,因为视图初始化完毕后,不能再修改值
    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    // Previous value: 'undefined'. Current value: 'helloo'.
    // this.message = 'helloo';
    // 放到另一个时间循环里去做就OK了
    setTimeout(() => {
      this.message = 'helloo';
    }, 1000);
  }

  ngAfterViewChecked() {
    console.log('父组件的视图变更检测完毕');
  }
}
