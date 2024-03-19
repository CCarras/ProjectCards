import {Component, inject} from '@angular/core';
import {CardForm} from "../../models/cardForm";
import {NgForm} from "@angular/forms";
import {CardsService} from "../../services/cards.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  CardForm = new CardForm();
  private router: Router = inject(Router);

  constructor(
    private cardsService: CardsService
  ) {
  }

  onSubmit(f: NgForm) {
    if (f.value.title.length > 40)
    {
      return;
    }

    this.CardForm.id = this.cardsService.getLastCard();
    this.cardsService.saveNewCard(this.CardForm);
    this.router.navigate(['home']);
  }
}
