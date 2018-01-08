/*
* @Author: Gabriel Lucena
* @Date:   2018-01-05 14:24:17
* @Last Modified by:   Gabriel Lucena
* @Last Modified time: 2018-01-05 14:35:17
*/
import { NgModule } from '@angular/core';

// Directive
import { ProgressBarDirective } from './progressbar.directive';


@NgModule({
    declarations: [
        ProgressBarDirective
    ],
    exports: [
        // exporting root module
        ProgressBarDirective
    ]
})
export class DirectivesModule {}
