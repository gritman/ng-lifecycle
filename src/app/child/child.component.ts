import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  greetingC: string;

  @Input()
  userC: { name: string };

  messageC = '初始化消息';

  constructor() {
  }

  ngOnInit() {
  }

  // 初始化时,greeting和user都会调用一次该方法,因为父组件的值被传递到子组件
  // 以后,再修改父组件的greeting,该方法还会被调用,因为它是不可变对象,指针换成新地址了
  // 以后,再修改父组件的user.name,该方法不会被调用,因为它是可变对象,user对象的地址没变
  // 以后,再修改父组件的message,该方法也不会被调用,因为message不是@input属性
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
