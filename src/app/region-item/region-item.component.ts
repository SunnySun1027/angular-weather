import {Component, Input} from '@angular/core'

interface WeatherData {
  regionName: '洛阳',
  regionEnName: 'luoyang',
  singleDayWeather: Object,
  threeDaysWeather: Object,
  isActive: false
}

@Component({
  selector: 'region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.styl']
})

export class RegionItem {
  title = '地区列表项';
  // @Input() middleStation: WeatherData;
  @Input() aRegion = {};

  // ngOnInit() {
  //   if (typeof this.middleStation.singleDayWeather !== 'undefined') {
  //     this.aRegion = this.middleStation;
  //   }
  // }
}
