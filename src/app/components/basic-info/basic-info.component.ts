import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadFileService} from '../upload-file.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

    basicInfoForm: FormGroup;
    submitted = false;
    firstname = null;
    lastname = null;
    selectedFiles: FileList;
    afuConfig = {
        uploadAPI: {
            url: 'https://example-file-upload-api'
        },
    };

    url = '';

    currentFileUpload: File;
    result: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private uploadService: UploadFileService) {
        this.router = router;
        this.formBuilder = formBuilder;

    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    upload() {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }

    get f() { return this.basicInfoForm.controls; }

    ngOnInit() {
        this.basicInfoForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            address: ['', Validators.required],
        });
    }

    goToPrevious() {
        this.router.navigate(['/sign-in']);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.basicInfoForm.invalid) {
            return;
        }
        this.router.navigate(['/educational-details']);
        // alert('SUCCESS!! :-)')
    }

    // image  upload

    // onSelectFile(event) {
    //     this.selectedFiles = event.target.files;
    //     if (event.target.files && event.target.files[0]) {
    //         const reader = new FileReader();
    //
    //         reader.readAsDataURL(event.target.files[0]); // read file as data url
    //
    //         reader.onload = (event) => { // called once readAsDataURL is completed
    //             this.url = event.target.result;
    //         }
    //     }
    // }


}
