import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http';
import { ExternalService } from '../services/external.service';
import { PostTest } from '../models/external-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private externalService: ExternalService
  ) {}

  ngOnInit(): void {
    console.log('admin')
  }

  GetUserWS(){
    this.externalService.getUser(1).subscribe((response) => {
      console.log("Response Get --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

  GetListWS(){
    this.externalService.getListPost().subscribe((response) => {
      console.log("Response List --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

  CreatePostWS() {
    var model = new PostTest();
        model.id = 1;
        model.title = "foo";
        model.body = "bar";
    
    this.externalService.postCreate(model).subscribe((response) => {
      console.log("Response Post --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

  UpdateostWS() {
    var model = new PostTest();
        model.id = 1;
        model.title = "foo";
        model.body = "bar";
    
    this.externalService.updateUser(1,model).subscribe((response) => {
      console.log("Response Update --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

  DeleteUserWS() {
    this.externalService.deleteUser(1).subscribe((response) => {
      console.log("Response Delete --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

  FilterUserWS() {
    var filter = { userId: 1 };
    this.externalService.filterUser(filter).subscribe((response) => {
      console.log("Response Filter --> ", response)
    },
      (error: HttpErrorResponse) => {
        console.error(error);
      });
  }

}
