import { Routes } from '@angular/router';
import { SportList } from './features/products/sport-list/sport-list';
import { ProductDetails } from './features/product-details/product-details';
import { NotFound } from './core/pages/not-found/not-found';

export const routes: Routes = [
    {path: '', component: SportList},
    {path: 'products', component: SportList},
    {path: 'products/:id', component: ProductDetails},
    {path: '**', component: NotFound}
];
