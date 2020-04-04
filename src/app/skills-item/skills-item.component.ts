import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css'],
  animations: [
    trigger('xExpand', [
      state('close', style({
        width: '0px',
        opacity: 0
      })),
      state('open', style({
        opacity: 1
      })),
      transition('close <=> open', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})

export class SkillsItemComponent implements OnInit {

  state: string = 'close'
  @Input() item: string

  constructor(private el: ElementRef) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const bounding = window.pageYOffset

      if (bounding+100 > (window.innerHeight || document.documentElement.clientHeight)) {
        this.state = 'open'
      } else {
        this.state = 'close'
      }
    }

}
