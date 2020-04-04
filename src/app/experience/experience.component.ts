import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('xExpand', [
      state('outRight', style({
        position: 'relative',
        left: '144px',
        opacity: 0
      })),
      state('in', style({
        position: 'relative',
        left: '0px',
        opacity: 1
      })),
      transition('in <=> *', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  state: boolean = true
  state1: boolean = false
  state2: boolean = false
  state3: boolean = false
  state4: boolean = false
  state5: boolean = false

  constructor(private el: ElementRef) { }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const bounding = document.querySelector('app-experience').getBoundingClientRect()

      if (bounding.top+150 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state1 = true
      } else {
        this.state1 = false
      }

      if (bounding.top+225 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state2 = true
      } else {
        this.state2 = false
      }

      if (bounding.top+300 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state3 = true
      } else {
        this.state3 = false
      }

      if (bounding.top+375 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state4 = true
        this.el.nativeElement.hidden = false;
      } else {
        this.state4 = false
      }
      
      if (bounding.top+450 < (window.innerHeight || document.documentElement.clientHeight)) {
        this.state5 = true
      } else {
        this.state5 = false
      }
      if (this.state1 || this.state2 || this.state3 || this.state4 || this.state5) {
        this.state = false
      } else {
        this.state = true
      }
    }

    closeAll( event: AnimationEvent) {
      if (this.state1 || this.state2 || this.state3 || this.state4 || this.state5) {
        this.state = false
      } else {
        this.state = true
      }
    }
}
