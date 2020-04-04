import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('xExpand', [
      state('outRight', style({
        left: '10%',
        opacity: 0
      })),
      state('outLeft', style({
        left: '-10%',
        opacity: 0
      })),
      state('in', style({
        left: '0px',
        right:'0px',
        opacity: 1
      })),
      transition('in <=> *', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
  state1: boolean = false
  state2: boolean = false

  constructor(private el: ElementRef) { }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const bounding = document.querySelector('app-education') .getBoundingClientRect()

      if (bounding.bottom-120 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state1 = true
      } else {
        this.state1 = false
      }

      if (bounding.bottom-25 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state2 = true
      } else {
        this.state2 = false
      }
    }

}
