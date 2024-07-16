import { Component, OnInit } from '@angular/core';
import { FormHeaderComponent } from '../../shared/form-header/form-header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormHeaderComponent,FooterComponent,FormsModule,InputTextModule,ButtonModule,CalendarModule,InputNumberModule,KeyFilterModule,DropdownModule,DialogModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  value: any = {};
  maxDate: Date | undefined;
  stage:number = 1
  filiere=[{}]    
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.filiere=[
    { nom: 'Tronc Commun', code: 1 },
    { nom: 'Informatique et Systeme d\'Information', code: 2 },
    { nom: 'Systeme Reseau et Telecommunication', code: 3 },
    { nom: 'Genie Civil', code: 4 },
    { nom: 'Management', code: 5 }]
  }

  next(){
    console.log(this.value)
    this.stage+=1
  }
  send(){
    console.log(this.value)
    this.showDialog()
    // this.stage+=1
  }
    loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}
