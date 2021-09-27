import { Component } from '@angular/core';
import { Menu } from '../../models/Menu';
import { Location } from '../../models/Location';
@Component({
  selector: 'app-detail-store-component',
  templateUrl: './detailStore.component.html'
})
export class DetailStoreComponent {
  public listmenu: Menu[] = [
    {
      ID: 1,
      Name: "me nu so ti le 1",
      StoreID: 1
    },
    {
      ID: 2,
      Name: "me nu so ti le 2",
      StoreID: 1
    },
    {
      ID: 3,
      Name: "me nu so ti le 3",
      StoreID: 1
    }
  ]

}
