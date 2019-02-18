import { Component, NgZone } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ParamService} from "../../param.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-link-renderer',
  templateUrl: './link-renderer.component.html',
  styleUrls: ['./link-renderer.component.css']
})
export class LinkRendererComponent implements ICellRendererAngularComp {

  private param: any;



  constructor(private ngZone: NgZone, private paramService: ParamService, private router: Router) { }

  agInit(param: any) {
    // console.log(param['data']);
    this.param = param;
  }

  setParam(param) {
    this.param = param;
    this.paramService.setParam(this.param);
    this.ngZone.run(() => this.router.navigate(['/answer/' + param['data'].owner['user_id']]));

  }

  refresh(param:any) : boolean {
    return true;
  }

}
