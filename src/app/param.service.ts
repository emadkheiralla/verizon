import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  private param: any;
  private paramSource = new BehaviorSubject<string[]>(this.param);
  public currentParam = this.paramSource.asObservable();

  constructor() { }

  setParam(param){
    this.paramSource.next(param);
  }

}
