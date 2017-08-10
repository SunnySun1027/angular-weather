import {Component, Input} from '@angular/core'

@Component({
  selector: 'region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.styl']
})

export class RegionDetail {
  title = '地区详情';
  @Input() aRegion = {};

  getWeatherCardClass(targetWeather): string {
    // console.log(targetWeather);
    let outcomeClass = 'weather-card-';

    if (targetWeather.now.code <= 4) {
      outcomeClass += 'sunny';
    } else if (targetWeather.now.code > 4 && targetWeather.now.code <= 9) {
      outcomeClass += 'snow';
    } else if (targetWeather.now.code > 9 && targetWeather.now.code <= 15) {
      outcomeClass += 'rain';
    } else if (targetWeather.now.code > 15 && targetWeather.now.code <= 30) {
      outcomeClass += 'storm';
    }

    return outcomeClass;
  }

  getWeatherClass(targetWeather): string {
    let outcomeClass = '';

    if (targetWeather.now.code <= 4) {
      outcomeClass = 'sunny';
    } else if (targetWeather.now.code > 4 && targetWeather.now.code <= 9) {
      outcomeClass = 'snow';
    } else if (targetWeather.now.code > 9 && targetWeather.now.code <= 15) {
      outcomeClass = 'rain';
    } else if (targetWeather.now.code > 15 && targetWeather.now.code <= 30) {
      outcomeClass = 'storm';
    }

    return outcomeClass;
  }
}
