import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyListPage } from './myList.page';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    AngularCommonModule,
    RouterModule.forChild([{ path: '', component: MyListPage }])
  ],
  declarations: [MyListPage],
  providers: []
})
export class MyListModule {}