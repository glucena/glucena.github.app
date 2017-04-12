/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-02-19 18:34:16
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { CvService } from './cv.service'

// Containers
import { NamePositionComponent } from './containers/name-position/name-position.component';

// Components
import { CvName } from './components/cv-name/cv-name.component';
import { CvPosition } from './components/cv-position/cv-position.component';

@NgModule({
    declarations: [
        // register container component
        NamePositionComponent,
        CvName,
        CvPosition
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
        NamePositionComponent
    ]
})
export class NamePositionModule {}