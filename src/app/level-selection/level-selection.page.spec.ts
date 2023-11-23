import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelSelectionPage } from './level-selection.page';

describe('LevelSelectionPage', () => {
  let component: LevelSelectionPage;
  let fixture: ComponentFixture<LevelSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
