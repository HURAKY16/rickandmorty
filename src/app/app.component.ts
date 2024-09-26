import { Component, OnInit } from '@angular/core';
import { RickMortyServiceService } from './rick-morty-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  personajes: any[] = [];
  
  constructor(private rickMortyServiceService: RickMortyServiceService ){}
 ngOnInit(): void {
  this.rickMortyServiceService.getpersonajes().subscribe(data =>{
    this.personajes = data.results;
  } )

}
}
