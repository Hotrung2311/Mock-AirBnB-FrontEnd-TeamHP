import { Component, OnInit } from '@angular/core';
import {HouseService} from "@app/_services/house.service";
import {UploadService} from "@app/_services/upload.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {House} from "@app/_model/house";
import {ImageHouse} from "@app/_model/imageHouse";
import Swal from 'sweetalert2';
import {Res} from "@app/_model/res";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {Account} from "@app/_model/account";

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});


@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {

  settings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    enableCheckAll: true,
    selectAllText: 'Select all',
    unSelectAllText: 'Unselect all',
    allowSearchFilter: true,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 10,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No value',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: false,
    defaultOpen: false,
  };

  HouseForm: FormGroup;
  house: House ;
  hardFixHost: Account = {
    id: 1,
  };
  files: File[] = [];
  images: ImageHouse[] = [];

  constructor(private houseService: HouseService,
              private uploadService: UploadService,
              private formBuilder: FormBuilder,
              private storage: AngularFireStorage,
              private db: AngularFirestore,
              // private allListService: AllListService,
  ) { }

  ngOnInit() {
    // const arrayResult = this.getList();
    // arrayResult.then((resList) => {
    //   this.houseTypes = resList[0].data;
    //   this.roomTypes = resList[1].data;
    //   this.cities = resList[2].data;
    // });

    this.HouseForm = this.formBuilder.group({
      nameHouse: ['', Validators.required],
      address: ['', Validators.required],
      bathroom: ['', Validators.required],
      bedroom: ['', Validators.required],
      houseTypes: ['', Validators.required],
      roomTypes: ['', Validators.required],
      city: ['', Validators.required],
      priceHouse: ['', Validators.required],
    });
  }

  // async getList() {
  //   return Promise.all([
  //     this.allListService.getHouseTypeList().toPromise(),
  //     this.allListService.getRoomTypeList().toPromise(),
  //     this.allListService.getCityList().toPromise(),
  //   ]);
  // }

  async onSubmit() {
    if (this.HouseForm.invalid) {
      await Toast.fire({
        icon: 'warning',
        title: 'invalid',
        html: 'Please complete!!!!'
      });
      return;
    }
    console.log('saving');

    this.house = this.HouseForm.value;
    const uploadArray = [];
    this.files.forEach((file) => {
      uploadArray.push(this.uploadService.startUpload(file));
    });
    console.log('before upload');

    Promise.all(uploadArray)
      .then(async (result) => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          const imageUrl = await element.ref.getDownloadURL();
          this.images.push({
            imageUrl: this.uploadService.convertToResizeUrl(imageUrl),
          });
          console.log('pass' + i);
        }
        console.log(this.images);
      })
      .then(() => {
        this.house.account = {
          id: 1
        }
        this.house.imageHouses = this.images;
        console.log(this.house);
        this.houseService
          .addHouse(this.house)
          .subscribe((res: Res) => {
            console.log(res);
            if (res.status === 'SUCCESS')  Toast.fire({
              icon: 'success',
              title: 'Success',
              html: 'Create new Apartment Success!!!!'
            });
            else  Toast.fire({
              icon: 'error',
              title: 'Fail',
              html: 'Create new Apartment Fail!!!!'
            });
          });
      })
      .catch((err) => alert(err))
      .finally(() => {
        this.images = [];
        this.house = {};
        this.HouseForm.reset();
      });
  }

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    console.log(this.files);
  }

}
