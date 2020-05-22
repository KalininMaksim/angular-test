import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', 'bootstrap.component.css'],
})
export class ContentComponent implements OnInit {
  private _data: any;
  private _contentUrl: string =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink';

  public cocntent: any[];

  constructor(private _reqServ: RequestService) {}

  ngOnInit() {
    this._reqServ.getData(this._contentUrl).subscribe((response) => {
      this._data = response;
      this.cocntent = [...this._data.drinks];
    });
  }
}
