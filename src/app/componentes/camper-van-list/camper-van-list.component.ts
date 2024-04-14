import { Component, inject, Input } from '@angular/core';
import { ServiceVans } from 'src/app/services/serviceVans.service';
import { Camper } from 'src/app/interfaces/campers.interface';

@Component({
  selector: 'app-camper-van-list',
  templateUrl: './camper-van-list.component.html',
  styleUrls: ['./camper-van-list.component.css']
})

export class CamperVanListComponent {
  @Input() filteredVans: Camper[] = [];


}
