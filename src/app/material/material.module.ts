import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
const MaterialComponents = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
