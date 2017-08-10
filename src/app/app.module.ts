import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { RegionList } from './region-list/region-list.component'
import { RegionItem } from './region-item/region-item.component'
import { RegionDetail } from './region-detail/region-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    RegionList,
    RegionItem,
    RegionDetail
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
