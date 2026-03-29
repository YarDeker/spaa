import { Routes } from '@angular/router';
import { SportList } from './features/products/sport-list/sport-list';
import { ProductDetails } from './features/product-details/product-details';
import { NotFound } from './core/pages/not-found/not-found';
import { ProductForm } from './features/product-form/product-form';

export const routes: Routes = [
    {path: '', component: SportList},
    {path: 'products', component: SportList},
    {path: 'products/new', component: ProductForm},
    {path: 'products/:id', component: ProductDetails},
    {path: '**', component: NotFound},
];
