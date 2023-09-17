import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';

  @ViewChild('table', {read: ViewContainerRef})

  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<TableComponent>;



  add(){
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(TableComponent);
  }

  delete_table(){
    this.viewRef.clear();
  }
}
