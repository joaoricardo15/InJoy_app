import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RoleComponent } from './components/role/role.component';
import { RoleDisplayComponent } from './components/roleDisplay/roleDisplay.component';
import { RolesHorizontalListComponent } from './components/rolesHorizontalList/rolesHorizontalList.component';
import { RoleRatingComponent } from './components/roleRating/roleRating.component';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { RoleTagComponent } from './components/roleTag/roleTag.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { RolePageComponent } from './components/rolePage/rolePage.component';

@NgModule({
  imports: [
    IonicModule,
    AngularCommonModule
  ],
  declarations: [
    RoleComponent,
    RolePageComponent,
    ExperienceComponent,
    RoleTagComponent,
    RoleDisplayComponent,
    RoleRatingComponent,
    RolesHorizontalListComponent,
  ],
  exports: [
    RoleComponent,
    RolePageComponent,
    ExperienceComponent,
    RoleTagComponent,
    RoleDisplayComponent,
    RoleRatingComponent,
    RolesHorizontalListComponent
  ],
  entryComponents: [
    RoleRatingComponent
  ],
  providers: [
    Camera,
    Geolocation,
    LocalNotifications,
    BackgroundGeolocation,
  ]
})
export class CommonModule {}
