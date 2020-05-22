import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  private _data: any;
  private _fitersUrl: string =
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  public fiters: any[];

  constructor(private _reqServ: RequestService) {}

  ngOnInit() {
    this._reqServ.getData(this._fitersUrl).subscribe((response) => {
      this._data = response;
      this.fiters = [...this._data.drinks];
    });
  }
}
