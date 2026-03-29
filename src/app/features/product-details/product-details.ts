import { Component, inject, Input } from '@angular/core';
import { SportActivity } from '../../shared/models/sportInfo';
import { Observable } from 'rxjs';
import { SportService } from '../../sport-service';
import { SportCard } from "../../shared/components/sport-card/sport-card";
import { CommonModule, NgForOf } from '@angular/common';

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
