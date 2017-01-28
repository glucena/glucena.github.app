/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-01-14 15:03:53
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CvComponent } from './containers/cv/cv.component';

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
        
    ],
    exports: [
        // exporting root module
        CvComponent
    ]
})
export class CvModule {}