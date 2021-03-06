import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { VenuepageRoutingModule } from './venuepage-routing.module';
import { VenuepageComponent } from './venuepage.component';

@NgModule({
    imports: [
        CommonModule,
        VenuepageRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [VenuepageComponent]
})
export class VenuepageModule {}
