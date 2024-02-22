import { ColRegistrationComponent } from './col-registration/col-registration.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CollaboratorService } from 'src/app/shared/services/collaborator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  bsModalRef?: BsModalRef;
  collaborators$!: Observable<string[]>; // Observable para a lista de colaboradores

  constructor(private modalService: BsModalService, private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    // Obtenha a lista de colaboradores do serviço
    this.collaborators$ = this.collaboratorService.getCollaborators();
  }

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Modal with component'
      },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(ColRegistrationComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}