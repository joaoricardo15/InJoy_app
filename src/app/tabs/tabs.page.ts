import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  ngOnInit() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  onDeviceReady() {
    
  }
}