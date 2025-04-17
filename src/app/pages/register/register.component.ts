import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
      this.router.navigate(['/login']);
    }
  }

}
