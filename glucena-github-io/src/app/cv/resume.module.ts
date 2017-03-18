/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 10:20:17
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-18 10:22:10
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { CvService } from './cv.service'

// Containers
import { ResumeComponent } from './containers/resume/resume.component';

// Components

@NgModule({
    declarations: [
        // register container component
        ResumeComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [
        CvService
    ],
    exports: [
        // exporting root module
        ResumeComponent
    ]
})
export class ResumeModule {}