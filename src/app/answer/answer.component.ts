import {Component, Inject, OnInit} from '@angular/core';
import {ParamService} from "../param.service";
import {MatDialogComponent} from "./mat-dialog/mat-dialog.component";
import {MatDialog} from "@angular/material";
import {HttpClient} from "@angular/common/http";

export interface DialogData {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  private param: any;
  answer: any;

  constructor(public dialog: MatDialog, private paramService: ParamService, private http: HttpClient) {}

  ngOnInit() {
    this.paramService.currentParam.subscribe(param => this.param = param);
  }

  openDialog(): void {
    this.http.get('https://api.stackexchange.com/2.2/answers/' + this.param['data'].accepted_answer_id + '?order=desc&sort=activity&site=stackoverflow&filter=withbody')
      .subscribe(res => {
        this.answer = res['items'][0].body;
      }, err => {
        console.log(err.error);
      });

    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '600px',
      data: {question: this.param.value, answer: this.answer}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
