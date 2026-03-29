import { Component, inject, Input } from '@angular/core';
import { SportActivity } from '../../shared/models/sportInfo';
import { Observable } from 'rxjs';
import { SportService } from '../../sport-service';
import { CommonModule, NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { SportCard } from "../../shared/components/sport-card/sport-card";

@Component({
  selector: 'sport-product-details',
  imports: [NgForOf, SportCard, CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() id!: string
  sportService = inject(SportService)
  
  product$!: Observable<SportActivity | undefined>

  ngOnInit () {
    this.product$ = this.sportService.getById(this.id)
  }
}
