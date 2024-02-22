import {Component, inject, OnInit} from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {CardForm} from "../../models/cardForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private cardsService: CardsService = inject(CardsService);
  private router: Router = inject(Router);
  cardList: CardForm[] = [];
  adminMode: boolean = false;

  ngOnInit() {
    if (this.cardsService.cardList == null) {
      this.cardsService.getAllCards().subscribe(cards => {
        this.cardList = cards;
        this.cardsService.saveMyCards(this.cardList);
        console.log('Este listado ');
      });
    } else {
      this.cardList = this.cardsService.getMyCards();
      console.log('Servidor listado ');
    }
  }

  changeActivity(id: number):void {
    this.cardList[id-1].completed = !this.cardList[id-1].completed;
  }

  changeAdminMode(): void {
    this.adminMode = !this.adminMode;
  }

  deleteIt(id: number):void {
    this.cardsService.deleteThisCard(id-1).subscribe(
      response => {
        this.cardsService.cardList = this.cardsService.cardList.filter(card => card.id !== id);
        this.cardList = this.cardsService.cardList;
      }
    );
  }

  goNewTask(): void {
    this.router.navigate(['addTask']);
  }
}
