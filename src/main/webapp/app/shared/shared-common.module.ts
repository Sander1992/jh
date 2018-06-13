import { NgModule } from '@angular/core';

import { TestProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestProjectSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    providers: [],
    exports: [TestProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestProjectSharedCommonModule {}
