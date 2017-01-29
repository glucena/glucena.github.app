/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-01-29 14:02:02
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { CvService } from './cv.service'

// Containers
import { CvComponent } from './containers/cv/cv.component';

// Components

@NgModule({
    declarations: [
        // register container component
        CvComponent
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
        CvComponent
    ]
})
export class CvModule {}