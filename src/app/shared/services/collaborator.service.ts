
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collaborator } from 'src/app/interfaces/collaborator';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  private collaborators: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  getCollaborators(): BehaviorSubject<string[]> {
    return this.collaborators;
  }

  addCollaborator(collaborator: string): void {
    const currentCollaborators = this.collaborators.value;
    currentCollaborators.push(collaborator);
    this.collaborators.next(currentCollaborators);
  }

}
