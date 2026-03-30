import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'sport-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  private fb = inject(FormBuilder)
    public form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],

    description: ['', [Validators.required, Validators.minLength(10)]],

    imageUrl: ['', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]],

    rating: [0, [
      Validators.required,
      Validators.min(0),
      Validators.max(5)
    ]],

    price: [0, [
      Validators.required,
      Validators.min(0)
    ]],

    is_discount: [false],

    createdAt: [new Date(), [Validators.required]],
    startDate: ['', [Validators.required]],

    type: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],

    tags: this.fb.array([]),

    availableDays: this.fb.array([], Validators.required),

    location: this.fb.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      indoor: [false]
    }),

    coach: this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      experienceYears: [0, [
        Validators.required,
        Validators.min(0),
        Validators.max(50)
      ]],
      certified: [false]
    })
  });
}
