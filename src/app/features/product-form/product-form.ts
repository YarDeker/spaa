import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DifficultyLevel, SportType } from '../../shared/models/sportInfo';
import { forbiddenNameValidator } from '../../shared/validators/custom.validators';

@Component({
  selector: 'sport-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  private fb = inject(FormBuilder);

  sportTypes = Object.values(SportType);
  difficultyLevels = Object.values(DifficultyLevel);

  public form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)], forbiddenNameValidator(/test|admin/i)],
    description: ['', [Validators.required, Validators.minLength(10)]],
    imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],

    rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    price: [0, [Validators.required, Validators.min(0)]],

    is_discount: [false],

    createdAt: [new Date(), [Validators.required]],
    startDate: ['', [Validators.required]],

    type: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],

    tags: this.fb.array([]),
    availableDays: this.fb.array([], Validators.required),

    location: this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      indoor: [false]
    }),

    coach: this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      experienceYears: [0, [Validators.required, Validators.min(0)]],
      certified: [false]
    })
  });

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  get availableDays(): FormArray {
    return this.form.get('availableDays') as FormArray;
  }

  addTag(value: string) {
    if (value.trim()) this.tags.push(this.fb.control(value));
  }

  addDay(value: string) {
    if (value.trim()) this.availableDays.push(this.fb.control(value));
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }
}
