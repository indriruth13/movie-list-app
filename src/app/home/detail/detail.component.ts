import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  @Input('detail') public detail:any;
  @Input('imageData') public imageData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
