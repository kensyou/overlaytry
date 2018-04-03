import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FilePreviewOverlayComponent } from './file-preview-overlay.component';
import {FilePreviewOverlayService} from './file-preview-overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule { }
