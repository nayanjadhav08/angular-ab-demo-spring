import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AsyncdataService {
  postdata = '{    "empid": 99,    "empname": "AADISH",    "salary": 78}';

  constructor(private http: HttpClient) {}
  getHttpData() {
    return this.http.get("http://localhost:8079/emp");
  }

  postHttpData(id, name, sal) {
    //this.postdata={    "empid": id,    "empname": name,    "salary": sal}
    this.postdata =
      '{    "empid":' +
      id +
      ',    "empname":"' +
      name +
      '",    "salary":' +
      sal +
      "}";
    console.log(this.postdata);
    return this.http.put("http://localhost:8079/update", this.postdata, {
      headers: new HttpHeaders({})
    });
  }
}
