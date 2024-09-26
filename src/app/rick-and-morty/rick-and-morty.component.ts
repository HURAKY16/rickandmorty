import { Component, OnInit } from '@angular/core';
import {RickMortyServiceService} from '../rick-morty-service.service'
@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  characters: any[] = [];
  episodeDetails: { [key: number]: any } = {}; // Almacenará los detalles de cada episodio

  constructor(private rickMortyServiceService: RickMortyServiceService) {}

  ngOnInit(): void {
    this.rickMortyServiceService.getpersonajes().subscribe(data => {
      this.characters = data.results.map((character:any) => {
        character.isFlipped = false; // Inicializa la propiedad isFlipped
        return character;
      });
      this.loadEpisodeDetails();
    });
  }

  selectCharacter(character: any): void {
    character.isFlipped = !character.isFlipped; // Cambia el estado de flip
  }

  loadEpisodeDetails(): void {
    // Carga los detalles de todos los episodios
    const episodeUrls: string[] = this.characters.reduce((acc, character) => {
      return acc.concat(character.episode); // Combina los episodios de cada personaje
    }, []);
    
    const uniqueEpisodeUrls: string[] = [...new Set(episodeUrls)]; // Obtener URLs únicas

    uniqueEpisodeUrls.forEach(url => {
      const episodeId = Number(url.split('/').pop()); // Extrae el ID del episodio y lo convierte a número
      this.rickMortyServiceService.getcapitulo(episodeId).subscribe(episode => {
        this.episodeDetails[episodeId] = episode; // Almacena los detalles del episodio
      });
    });
  }
}