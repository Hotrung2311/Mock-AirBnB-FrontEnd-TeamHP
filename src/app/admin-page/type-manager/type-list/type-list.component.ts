import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../_services/products.service";
import {IType} from "../../../_model/itype";
import {TypeService} from "../../../_services/type.service";

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  constructor(
    private typeService: TypeService
  ) {
  }

  typeList: IType[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.typeService.getAll().subscribe(data =>
      this.typeList = data
    );
    console.log(this.typeList);
  }
}
