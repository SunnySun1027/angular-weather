import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';
  targetRegionList = [
    {
      regionName: '洛阳',
      regionEnName: 'luoyang',
        singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '北京',
      regionEnName: 'beijing',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '太原',
      regionEnName: 'taiyuan',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '海南',
      regionEnName: 'hainan',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '拉萨',
      regionEnName: 'lasa',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '纽约',
      regionEnName: 'hangzhou',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    },
    {
      regionName: '巴黎',
      regionEnName: 'guangzhou',
      singleDayWeather: Object,
      threeDaysWeather: Object,
      isActive: false
    }
  ];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getApiData();
  }

  getApiData(): void {
    for (let i = 0; i < this.targetRegionList.length; i++) {
      let targetCity = this.targetRegionList[i].regionEnName;
      this.http.get(`http://localhost:3000/api/get-single-day/?region=${targetCity}`)
        .subscribe(res => {
          // console.log('get single day : ');
          // console.log(res.json());
          this.targetRegionList[i].singleDayWeather = res.json();
          if (this.targetRegionList[i].singleDayWeather === undefined) {
            // alert('单日数据获取错误，请联系管理员：https://github.com/JuniorTour！')
          }
        }, (error: Error) => {
          // alert('网络错误！请联系管理员：https://github.com/JuniorTour。')
        });

      this.http.get(`http://localhost:3000/api/get-three-days/?region=${targetCity}`)
        .subscribe(res => {
          // console.log('get three days : ');
          // console.log(res.json());
          this.targetRegionList[i].threeDaysWeather = res.json();
          if (this.targetRegionList[i].threeDaysWeather === undefined) {
            // alert('三日数据获取错误，请联系管理员：https://github.com/JuniorTour！')
          }
        }, (error: Error) => {
          // alert('网络错误！请联系管理员：https://github.com/JuniorTour。')
        });
    }
  }
}
