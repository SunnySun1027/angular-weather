import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';
  enteredApp = false;
  exampleRegionList = [
    {
      regionName: 'M78星云',
      regionEnName: 'm78',
      singleDayWeather: {
        now: {
          text: '雪',
          code: 22,
          temperature: '26'
        }
      },
      threeDaysWeather: {
        daily: [
          {date: "2017-08-8",text_day: '霜降'},
          {date: "2017-08-9",text_day: '小雪'},
          {date: "2017-08-10",text_day: '大寒'},
        ]
      },
      isActive: false
    },
    {
      regionName: '召唤师峡谷',
      regionEnName: 'zhiyuanxing',
      singleDayWeather: {
        now: {
          text: '雷暴',
          code: 11,
          temperature: '26'
        }
      },
      threeDaysWeather: {
        daily: [
          {date: "2017-08-8",text_day: '立春'},
          {date: "2017-08-9",text_day: '雨水'},
          {date: "2017-08-10",text_day: '惊蛰'},
        ]
      },
      isActive: false
    },
    {
      regionName: '寮办',
      regionEnName: 'liaoban',
      singleDayWeather: {
        now: {
          text: '夜',
          code: 99,
          temperature: '26'
        }
      },
      threeDaysWeather: {
        daily: [
          {date: "2017-08-8",text_day: '芒种'},
          {date: "2017-08-9",text_day: '夏至'},
          {date: "2017-08-10",text_day: '小暑'},
        ]
      },
      isActive: false
    },
    {
      regionName: '汉东市',
      regionEnName: 'handongshi',
      singleDayWeather: {
        now: {
          text: '雨',
          code: 13,
          temperature: '26'
        }
      },
      threeDaysWeather: {
        daily: [
          {date: "2017-08-8",text_day: '小雨'},
          {date: "2017-08-9",text_day: '谷雨'},
          {date: "2017-08-10",text_day: '清明'},
        ]
      },
      isActive: false
    }
  ];
  /*这里有一个bug：
  * 在aot模式下build时，会因为数据尚未传输进来而报错：
  * "... is undefined."
  * 可以参考：https://stackoverflow.com/questions/40097820/property-does-not-exist-on-type-object-observable-subscribe
  * 所以最后只好使用ng buil --prod --no-aot。
  * TODO 优化之*/
  targetRegionList = [
    {
      regionName: '洛阳',
      regionEnName: 'luoyang',
      singleDayWeather: {
        now: {
          text: '',
          code: 0,
          temperature: ''
        }
      },
      threeDaysWeather: {
        daily: [
          {date: '',text_day: ''},
          {date: '',text_day: ''},
          {date: '',text_day: ''}
        ]},
      isActive: false
    },
    {
      regionName: '北京',
      regionEnName: 'beijing',
      singleDayWeather: {
        now: {
          text: '',
          code: 0,
          temperature: ''
        }
      },
      threeDaysWeather: {
        daily: [
          {date: '',text_day: ''},
          {date: '',text_day: ''},
          {date: '',text_day: ''}
        ]},
      isActive: false
    },
    {
      regionName: '太原',
      regionEnName: 'taiyuan',
      singleDayWeather: {
        now: {
          text: '',
          code: 0,
          temperature: ''
        }
      },
      threeDaysWeather: {
        daily: [
          {date: '',text_day: ''},
          {date: '',text_day: ''},
          {date: '',text_day: ''}
        ]},
      isActive: false
    },
    {
      regionName: '海南',
      regionEnName: 'hainan',
      singleDayWeather: {
        now: {
          text: '',
          code: 0,
          temperature: ''
        }
      },
      threeDaysWeather: {
        daily: [
          {date: '',text_day: ''},
          {date: '',text_day: ''},
          {date: '',text_day: ''}
        ]},
      isActive: false
    }
  ];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getApiData();

    for (let i=0;i<this.exampleRegionList.length;i++) {
      this.targetRegionList.push(this.exampleRegionList[i])
    }
  }

  enterApp() {
    this.enteredApp = true;
  }

  getApiData(): void {
    // TODO Observable.zip
    for (let i = 0; i < this.targetRegionList.length; i++) {
      let targetCity = this.targetRegionList[i].regionEnName;
      // TODO 根据环境配置，不要写死地址。
      this.http.get(`http://juniortour.net:4201/api/get-single-day/?region=${targetCity}`)
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

      this.http.get(`http://juniortour.net:4201/api/get-three-days/?region=${targetCity}`)
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
