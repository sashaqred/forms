import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'service-user',
  templateUrl: './service-user.component.html',
  styleUrls: ['./service-user.component.scss']
})
export class ServiceUserComponent {
  @Input() fgName: string;

  user: AbstractControl;

  constructor(public fs: FormService) { }

  ngOnChanges() {
    this.user = this.fs.get(this.fgName);
  }
}
