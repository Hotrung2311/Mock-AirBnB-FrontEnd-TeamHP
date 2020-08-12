// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup} from "@angular/forms";
// import {IType} from "../../../_model/itype";
// import {TypeService} from "../../../_services/type.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-type-edit',
//   templateUrl: './type-edit.component.html',
//   styleUrls: ['./type-edit.component.css']
// })
// export class TypeEditComponent implements OnInit {
//
//   editForm: FormGroup;
//   type: IType;
//   edited:boolean;
//
//   constructor(private typeService: TypeService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
//   }
//
//   ngOnInit(): void {
//     let id: number;
//     this.edited=false;
//     this.route.paramMap.subscribe(params => {
//       id = Number(params.get('id'));
//     });
//
//     this.editForm = this.fb.group({
//       title: [''],
//       author: [''],
//       description: ['']
//     });
//
//     this.typeService.findById(id).subscribe(
//       data => {
//         this.type = data;
//         this.editForm.patchValue(data);
//       }
//     );
//   }
//
//   editDetailBook() {
//     console.log(this.editForm);
//     const book = this.editForm.value;
//     this.typeService.edit(this.type.id, book).subscribe(
//       data => {
//         this.editForm.reset('');
//       },
//       err => {
//         alert(err);
//       }
//     );
//     this.edited = true;
//   }
// }
