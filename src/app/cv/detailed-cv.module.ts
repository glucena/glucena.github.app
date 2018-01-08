/*
* @Author: Gabriel Lucena
* @Date:   2017-03-18 10:20:17
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-08 20:49:56
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';

// Services
import { CvService } from './cv.service'

// Containers
import { DetailedCvComponent } from './containers/detailed-cv/detailed-cv.component';

// Directives
import { DirectivesModule } from './directives/directives.module';

@NgModule({
    declarations: [
        // register container component
        DetailedCvComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgsRevealModule,
        DirectivesModule
    ],
    providers: [
        CvService
    ],
    exports: [
        // exporting root module
        DetailedCvComponent
    ]
})
export class DetailedCvModule {}
