import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkRendererComponent} from "./link-renderer/link-renderer.component";
import {ParamService} from "../param.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('ipt') input: ElementRef;

  private searchTerm;
  rowData = [];
  gridDataAvailable = false;

  gridApi: any;
  gridColumnApi: any;
  param: any;

  columnDefs = [
    {headerName: 'Questions', field: 'title', cellRendererFramework: LinkRendererComponent, width:540}
  ];

  constructor(private http: HttpClient, private paramService: ParamService) {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getQuestions() {
    this.rowData = [];
    this.searchTerm = this.input.nativeElement.value;
    if(this.searchTerm !== ''){
      this.gridDataAvailable = true;
      this.gridApi.showLoadingOverlay();
      this.http.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=month&site=stackoverflow')
        .subscribe(res => {
          this.gridApi.hideOverlay();
          var value;
          for (const key of Object.keys(res['items'])) {
            value = res['items'];
            if (value[key].title.indexOf(this.searchTerm) >= 0) {
              this.rowData.push(value[key]);
            }
          }
          this.gridApi.setRowData(this.rowData);
        }, err => {
          console.log(err.error);
        });
    }
  }

  ngOnInit() {
    this.paramService.currentParam.subscribe(param => this.param = param);
  }
}
