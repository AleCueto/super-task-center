import { Component, Input, OnInit } from '@angular/core';
import { PeopleService} from 'src/app/core/services/people.service';
import { Person } from 'src/app/core/models/person.model';
import { PersonDetailComponent } from 'src/app/core/components/person-detail/person-detail.component';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentsService } from 'src/app/core/services/assignments.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {
  // people: Person;
  // form:FormGroup;

  constructor(
    private personService: PeopleService,
    // private fb:FormBuilder,
    private modal:ModalController,
    private assyngSvc:AssignmentsService,
    private alert:AlertController) {
    // this.form = this.fb.group({
    //   name:'',
    //   surname:''
    // });
  }

  createPerson(){
    // console.log(this.form.value); //It is called when push the form button
  }

  ngOnInit() {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getPeople(){
    return this.personService.people$;
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailComponent,
      componentProps:{
        person:person
      }
    });
    
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.personService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personService.updatePerson(result.data.person);
            break;
          default:
        }
    }
  });
  
  
  }
  
  onNewPerson(){
    this.presentPersonForm(null);  
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.personService.deletePersonById(person.id);
          },
        },
      ],
    });

    await alert.present();

    
    const { role } = await alert.onDidDismiss();
  }
  
  onDeletePerson(person){
  if(!this.assyngSvc.getAssignmentById(person.id))
  this.onDeleteAlert(person);
  else
  this.onPersonExistsAlert(person);
  }


  async onPersonExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: "La tarea que desea borrar está asignada. Quite la asignación.",
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();

  }



}
