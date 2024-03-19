import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CardForm} from "../models/cardForm";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private http = inject(HttpClient);
  public cardList: CardForm[];

  getAllCards(): Observable<CardForm[]> {
    return this.http.get<CardForm[]>('https://jsonplaceholder.typicode.com/todos');
  }
  saveMyCards(myCards: CardForm[]): void {
    this.cardList = myCards;
  }

  getLastCard(): number {
    return this.cardList.length;
  }

  saveNewCard(nCard: CardForm): void {
    this.cardList.unshift(nCard);
  }

  getMyCards(): CardForm[] {
    return this.cardList;
  }

  deleteThisCard(id: number): Observable<CardForm> {
    return this.http.delete<CardForm>(`https://jsonplaceholder.typicode.com/todos/${id}}`);
  }
}
