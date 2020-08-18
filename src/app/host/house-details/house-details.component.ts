import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UploadService} from "@app/_services/upload.service";
import {Res} from "@app/_model/res";
import {House} from "@app/_model/house";
import {HouseService} from "@app/_services/house.service";
import {OrderService} from "@app/_services/order.service";
import {ImageHouse} from "@app/_model/imageHouse";
import {Order} from "@app/_model/order";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  files: File[] = [];
  images: ImageHouse[] = [];
  house: House;
  start: Date;
  end: Date;
  constructor(
    private router: Router,
    private houseService: HouseService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    // get apartment
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getDetailHouseById(id).subscribe(
      (data: Res) => {
        this.house = data.data;
        // get imageurl to files
        const fetches = [];
        for (let i = 0; i < this.house.imageHouses.length; i++) {
          const url = this.house.imageHouses[i].imageUrl;
          fetches.push(this.fetchImage(url));
          console.log(fetches);
        }

        Promise.all(fetches)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (error) => {
        console.log(error);
        this.house = null;
      }
    );
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

  fetchImage(url: string) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return fetch(proxyUrl + url)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        // convert blob to file object
        const file = new File([blob], `image${Date.now()}.jpg`, {
          type: blob.type,
        });
        //push file to files
        this.files.push(file);
        console.log(this.files);
      });
  }


  async onSave() {
    console.log('saving');

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
        this.houseService
          .updateHouseImage(this.house.id, this.images)
          .subscribe(
            (data) => {
              console.log(data);
              alert('success');
            },
            (err) => console.log(err)
          );
      })
      .catch((err) => alert(err));
  }

  blockOrder() {
    console.log(this.start);
    console.log(this.end);
    const order: Order = {
      startTime: this.start,
      endTime: this.end,
      house: {
        id: this.house.id,
      },
    };
    this.orderService.blockOrder(order).subscribe(
      (res: Res) => {
        console.log(res);
        // tslint:disable-next-line:triple-equals
        if (res.status == 'SUCCESS') alert('block success');
        else alert('could not block with this date');
      },
      (err) => {
        console.log(err);
        alert('request failed');
      }
    );
  }

}
