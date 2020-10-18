import { Component, OnInit } from '@angular/core';
import { GetpostService } from '../getpost.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public bool = false ;
  public submitcheck = false ;
  public msg = "";
  public errormsg="";
  form = new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  feedback : new FormControl(''),
  comment : new FormControl('')
  });
  

  onSubmit(){
    this._getpostService.postdata(this.form.value)
      .subscribe(
        response => {this.msg =response ;this.bool = true},
        error => {this.msg=error.status+" "+error.statusText+" "+JSON.stringify(error.error).replace(/[{}]/g, ""); this.bool = false;this.errormsg=error}
      );
      this.submitcheck=true
  }
  

  constructor(private _getpostService: GetpostService ) { }

  ngOnInit(): void {
    this._getpostService.getdata()
      .subscribe(data => this.form.patchValue(data));

 
  }

}
