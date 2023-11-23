import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.page.html',
  styleUrls: ['./level-selection.page.scss'],
})
export class LevelSelectionPage implements OnInit {

  constructor(private router: Router) {}

  goToLevel(level: number) {
    // Here, you can navigate to the actual game level page when it's ready
    // For now, let's navigate to a placeholder page called 'null-page'
    this.router.navigate(['null-page']);
  }

  ngOnInit() {
  }

}