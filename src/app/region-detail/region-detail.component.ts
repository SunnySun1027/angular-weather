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
    // TODO 此处还需要优化！
    let outcomeClass = 'weather-card-';

    if (targetWeather.now.code <= 4) {
      outcomeClass += 'sunny';
    } else if (targetWeather.now.code > 4 && targetWeather.now.code <= 9) {
      outcomeClass += 'snow';
    } else if (targetWeather.now.code > 9 && targetWeather.now.code <= 10) {
      outcomeClass += 'rain';
    } else if (targetWeather.now.code === 11) {
      outcomeClass += 'storm';
    } else if (targetWeather.now.code > 12 && targetWeather.now.code <= 21) {
      outcomeClass += 'rain';
    } else if (targetWeather.now.code === 22) {
      outcomeClass += 'snow';
    } else if (targetWeather.now.code > 23 && targetWeather.now.code <= 30) {
      outcomeClass += 'night';
    } else if (targetWeather.now.code === 99) {
      outcomeClass += 'night';
    }

    return outcomeClass;
  }

  getWeatherClass(targetWeather): string {
    let outcomeClass = '';


    if (targetWeather.now.code <= 4) {
      outcomeClass = 'sunny';
    } else if (targetWeather.now.code > 4 && targetWeather.now.code <= 9) {
      outcomeClass = 'snow';
    } else if (targetWeather.now.code > 9 && targetWeather.now.code <= 10) {
      outcomeClass = 'rain';
    } else if (targetWeather.now.code === 11) {
      outcomeClass = 'storm';
    } else if (targetWeather.now.code > 12 && targetWeather.now.code <= 21) {
      outcomeClass = 'rain';
    } else if (targetWeather.now.code === 22) {
      outcomeClass = 'snow';
    } else if (targetWeather.now.code > 23 && targetWeather.now.code <= 30) {
      outcomeClass = 'night';
    } else if (targetWeather.now.code === 99) {
      outcomeClass = 'night';
    }

    return outcomeClass;
  }
}
