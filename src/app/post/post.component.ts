import { Component, OnInit } from '@angular/core';
import { postWeek } from './interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {
  // week: postWeek[] = []
  filterDays = ''
  constructor() { }
  ngOnInit(): void {

  }

  week = [
    {
      id: 1,
      title: "Lunes",
    },
    {
      id: 2,
      title: "Martes"
    },
    {
      id: 3,
      title: "Miercoles"
    },
    {
      id: 4,
      title: "Jueves"
    },
    {
      id: 5,
      title: "Viernes"
    }
  ];

 
}
