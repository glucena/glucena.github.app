/*
* @Author: Gabriel Lucena
* @Date:   2017-01-14 13:27:37
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2017-04-02 19:24:37
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';

// Services
import { CvService } from './cv.service'

// Containers
import { SummaryComponent } from './containers/summary/summary.component';

// Components
import { SummaryPersonalInfo } from './components/summary-personal-info/summary-personal-info.component';
import { SummaryDetails } from './components/summary-details/summary-details.component';
import { SummaryEmployment } from './components/summary-employment/summary-employment.component';
import { SummarySkills } from './components/summary-skills/summary-skills.component';

// Directive
import { ProgressBarDirective } from './directives/progressbar.directive';

// Routing
import { AppRoutingModule } from '../app.routing.module';


@NgModule({
    declarations: [
        // register container component
        SummaryComponent,
        SummaryPersonalInfo,
        SummaryDetails,
        SummaryEmployment,
        SummarySkills,
        ProgressBarDirective
    ],
    imports: [
        CommonModule,
        NgbModule,
        AppRoutingModule,
        NgsRevealModule
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