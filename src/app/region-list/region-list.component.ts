import { Component, Input } from '@angular/core'

@Component ({
  selector: 'region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.styl']
})

export class RegionList {
  title = '地区列表';
  isActive = false;
  gotData = false;
  @Input() regionList = [];

  ngOnInit() {
    if (this.regionList[6].singleDayWeather.now.text) {
      this.setGotData()
    }
  }

  setGotData() {
    this.gotData = true;
  }
}
