import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  startUpload(file: File) {
    // The storage path
    const path = `hotel/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    return this.storage.upload(path, file).snapshotChanges().toPromise();
  }

  convertToResizeUrl(url: string){
    const regex = '.jpg';
    const array = url.split(regex);
    return array.join('_1080x1080.jpg');
  }
}
