/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-03-05 13:39:08
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { CvService } from './cv.service'

// Containers
import { SummaryComponent } from './containers/summary/summary.component';

// Components
import { SummaryPersonalInfo } from './components/summary-personal-info/summary-personal-info.component';
import { SummaryDetails } from './components/summary-details/summary-details.component';
import { SummaryEmployment } from './components/summary-employment/summary-employment.component';
import { SummarySkills } from './components/summary-skills/summary-skills.component';

@NgModule({
    declarations: [
        // register container component
        SummaryComponent,
        SummaryPersonalInfo,
        SummaryDetails,
        SummaryEmployment,
        SummarySkills
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
        SummaryComponent
    ]
})
export class SummaryModule {}