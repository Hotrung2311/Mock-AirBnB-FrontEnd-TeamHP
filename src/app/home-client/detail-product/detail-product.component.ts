import { Component, OnInit } from '@angular/core';
import {Product} from "@app/_model/product";
import {ActivatedRoute} from "@angular/router";
import { HouseService } from '@app/_services/house.service';
import {House} from "@app/_model/house";
import {Vote} from '../../_model/vote';
import {TokenStorageService} from '../../jwt/tokenStorage.service';
import {datepickerAnimation} from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id: number;
  house: House;
  rates: number;

  constructor(
    private houseService: HouseService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.houseService.getById(this.id).subscribe(data=>{ return this.house = data});
    console.log(this.house)
  }

  rate() {
    if (this.rates>=0){
      const votes: Vote ={
        vote:this.rates,
        account:{
          id:this.tokenStorageService.getUser()
        },
        house: {
          id: this.id
        }
      }
      this.houseService.vote(votes).subscribe(data=>{
        window.location.reload();
        alert("bạn đã vote thành công");
      },
        error => {
        alert("bạn đã vote rồi");
        })
    }

  }
}
