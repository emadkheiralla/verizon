import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ParamService} from "../../param.service";

export interface DialogData {
  question: string;
  answer: any;
}

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit{

  param: any;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private paramService: ParamService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.paramService.currentParam.subscribe(param => this.param = param);
  }
}


