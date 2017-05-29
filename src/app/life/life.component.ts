import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input()
  name: string;

  logIt(msg: string) {
    // 注意,下面不是单引号',而是`
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() {
    this.logIt('name 属性在 constructor 里的值是: ' + name);
  }

  // 当父组件修改子组件的属性时调用
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logIt('name 属性在 ngOnChanges 里的值是: ' + name);
  }

  // 如果组件的初始化需要用到父组件传来的值,那么这个初始化要写在ngOnInit里
  // 因为组件的构造函数在父传值之前被调用
  ngOnInit() {
    this.logIt('ngOnInit');
  }

  // 每个变更检测周期被调用
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

}
