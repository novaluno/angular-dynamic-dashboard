import { Injectable } from '@angular/core';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { DataUpdatesComponent } from './data-updates/data-updates.component';
import { WidgetItem } from './models/widget-item';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  getWidgets() {
    return [
      new WidgetItem(NewsUpdatesComponent, { name: 'Bombasto', bio: 'Brave as they come Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }),

      new WidgetItem(DataUpdatesComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),

      new WidgetItem(NewsUpdatesComponent, { name: 'Rubberman', bio: 'Flexible as they come Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?' }),

      new WidgetItem(DataUpdatesComponent, { name: 'Magma', bio: 'Hot as they come' }),

      new WidgetItem(AreaChartComponent, { name: 'Barman', bio: 'Mixed-up as they come' }),

      new WidgetItem(ProductsGridComponent, { name: 'Sandman', bio: 'Gritty as they come' }),
    ];
  }
}
