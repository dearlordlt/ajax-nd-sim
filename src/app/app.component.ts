import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ajax-nds';
  newGame = false;

  constructor(
    private readonly gameService: GameService,
    private readonly route: ActivatedRoute,
  ) {
    this.gameService.newGame.subscribe((isStarted) => this.newGame = isStarted);
  }

  startGame() {
    this.gameService.start();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      params['game'] ? this.gameService.start() : this.gameService.stop();
    });
  }
}
