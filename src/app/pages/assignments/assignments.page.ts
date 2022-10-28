import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/core/services/assignments.service';
import { Assignment } from 'src/app/core/models/assignments.model';
import { AssignmentComponent } from 'src/app/core/components/assignment/assignment.component';
import { AppComponent } from 'src/app/app.component';
import { AssignmentDetailComponent } from 'src/app/core/components/assignment-detail/assignment-detail.component';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {
  // // assignment:Assignment;

  // constructor( 
  //   private assignmentSVC:AssignmentsService,
  //   private modal:ModalController,
  //   private alert:AlertController
  // ) 
  // {
  // }

  // // async presentModal(){
  // //   const modal = await this.modal.create({
  // //     component:AssignmentDetailComponent
  // //   });
  // //   modal.present();
  // // }

  // ngOnInit() {
  // }

  // refresh(ev) {
  //   setTimeout(() => {
  //     ev.detail.complete();
  //   }, 3000);
  // }

  // getAssignments(){
  //   return this.assignmentSVC.getAssignments();
  // }


  // async presentTaskForm(assignment:Assignment){
  //   const modal = await this.modal.create({
  //     component:AssignmentDetailComponent,
  //     componentProps:{
  //       assignment:assignment
  //     }
  //   });
    
  //   modal.present();
  //   modal.onDidDismiss().then(result=>{
  //     if(result && result.data){
  //       switch(result.data.mode){
  //         case 'New':
  //           this.assignmentSVC.addAssignment(result.data.person);
  //           break;
  //         case 'Edit':
  //           this.assignmentSVC.UpdateAssignment(result.data.person);
  //           break;
  //         default:
  //       }
  //   }
  // });

  // }

  
  // onNewAssignment(){
  //   this.presentTaskForm(null);  
  // }
  
  // onEditAssignment(assignment){
  //   this.presentTaskForm(assignment);
  // }
  
  // async onDeleteAlert(assignment){
  //   const alert = await this.alert.create({
  //     header: '¿Está seguro de que desear borrar la asignación?',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log("Operacion cancelada");
  //         },
  //       },
  //       {
  //         text: 'Borrar',
  //         role: 'confirm',
  //         handler: () => {
  //           this.assignmentSVC.deleteAssignmentById(assignment.id);
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();

  //   const { role } = await alert.onDidDismiss();
  // }

  // onDeleteAssignment(assignment){
  //   this.onDeleteAlert(assignment);
  // }




  constructor(
    private assignmentService: AssignmentsService,
    // private fb:FormBuilder,
    private modal:ModalController,
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


  getAssignments(){
    return this.assignmentService.getAssignments();
  }

  async presentAssignmentForm(assignment){
    const modal = await this.modal.create({
      component:AssignmentDetailComponent,
      componentProps:{
        assignment:assignment
      }
    });
    
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignmentService.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentService.updateAssignment(result.data.assignment);
            break;
          default:
        }
    }
  });
  
  
  }
  
  onNewAssignment(){
    this.presentAssignmentForm(null);  
  }

  onEditAssignment(assignment){
    this.presentAssignmentForm(assignment);
  }

  async onDeleteAlert(assignment){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar esta asignación?',
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
            this.assignmentService.deleteAssignmentById(assignment.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteAssignment(assignment){
  this.onDeleteAlert(assignment);
    
  }



}
