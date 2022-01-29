import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Announcement } from './announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private annonces: Announcement[] = [
    {
      user: {
        nom: "Cherkaoui",
        prenom: "Mehdi",
        filiere: "IHM-SI5",
        image: "../assets/mehdi.jpg"
      },
      id: 1,
      matiere: "C",
      description: "Bonjour je suis étudiant en SI5 en IHM, je suis à l'aise en C et"+
       "je pourrais vous aidez dans cette matière surout les SI3. Vous pouvez vous inscrire à l'annonce.",
      salle: "O+302",
      date: "31/01/2022 à 18h.",
      duree: 1,
    },
    {
      user: {
        nom: "Amine",
        prenom: "Amine",
        filiere: "AL-SI5",
        image: "../assets/image.jpg"
      },
      id: 2,
      matiere: "Java",
      description: "Bonjour je suis étudiant en SI5 en AL, "+
       "je vous donne rendez-vous le 2 février. Vous pouvez vous inscrire à l'annonce.",
      salle: "O+310",
      date: "02/02/2022 à 14h.",
      duree: 2,
    }
  ];
  public annonces$: BehaviorSubject<Announcement[]> = new BehaviorSubject(this.annonces);

  constructor() { }

  getAnnouncement(annonceId: Number) {
    let annonce;
    annonce = this.annonces.find((annonce) => annonce.id === annonceId);
    return annonce;
  }


}
