import { Component } from '@angular/core';
import { ListModel } from 'src/app/shared/models/list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements: ListModel[] =[
    new ListModel('this.type','this.newServerName','this.newServerContent')
  ]
  newServerName = '';
  newServerContent = '';

  onAddIranianServer(){
    this.serverElements.push({
      type: 'iran',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddGermanyServer() {
    this.serverElements.push({
      type: 'germany',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
