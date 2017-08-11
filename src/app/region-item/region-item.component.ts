import {Component, Input} from '@angular/core'

@Component({
  selector: 'region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.styl']
})

export class RegionItem {
  title = '地区列表项';
  @Input() aRegion = {};
}
