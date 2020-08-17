import { Component, OnInit } from '@angular/core';
import {HouseService} from "@app/_services/house.service";
// import {UploadService} from "@app/_services/upload.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {

  constructor(private houseService: HouseService,
              // private uploadService: UploadService,
              private formBuilder: FormBuilder,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

}
