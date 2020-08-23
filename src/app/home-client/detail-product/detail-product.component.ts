import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HouseService } from '@app/_services/house.service';
import {House} from "@app/_model/house";
import {Vote} from '../../_model/vote';
import {TokenStorageService} from '../../jwt/tokenStorage.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Comments} from '../../_model/comment';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id: number;
  house: House={};
  rates: number;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  commentForm: FormGroup;

  constructor(
    private houseService: HouseService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.houseService.getById(this.id).subscribe(data=>{
      this.house = {
        id:data.id,
        address:data.address,
        account:data.account,
        imageHouses:data.imageHouses,
        bathroom:data.bathroom,
        nameHouse:data.nameHouse,
        bedroom:data.bedroom,
        voteNumber:data.voteNumber,
        city:data.city,
        comments:data.comments,
        priceHouse:data.priceHouse
      };
      console.log(this.house);
    });

    this.commentForm = this.formBuilder.group({
      contentComment: [''],
    })
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

  submit() {
    const comment: Comments ={
      account:{
        id:this.tokenStorageService.getUser()
      },
      contentComment:this.commentForm.value.contentComment,
      house: {
        id: this.id
      }
    }
      this.houseService.comment(comment).subscribe(data=>{
        window.location.reload();
        console.log(comment);
      })
  }
}
