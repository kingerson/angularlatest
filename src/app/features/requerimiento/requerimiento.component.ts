import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.scss']
})
export class RequerimientoComponent implements OnInit {

  loginForm: FormGroup;

  form: {
    resume: File | null
  }
  file:File
  plantilla:string
  descripcion:string
  titulo:string
  itemComponents:Array<any>
  dataSet:any


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      titulo: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      plantilla: [null, [Validators.required]]
    });
  }

  create() {
    if(this.validacion()){
      console.log(this.file  == undefined ? '' : this.file.name)
      console.log(this.loginForm.value.plantilla)
      console.log(this.loginForm.value.titulo)
      console.log(this.loginForm.value.descripcion)
    }   
  }

  fileProgress(fileInput: any) {
    this.file = <File>fileInput.fileList[0];
    const status = fileInput.file.status;
    console.log(status);
    if (status !== 'uploading') {
      console.log(fileInput.file, fileInput.fileList);
    }
    if (status === 'done') {
      debugger;
      this.file = <File>fileInput.fileList[0]
    } else if (status === 'error') {
      console.error(`${fileInput.file.name} file upload failed.`);
    }
    
  }

  validacion():boolean{
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      return true;
    }else {
      return false;
    }
  }

}
