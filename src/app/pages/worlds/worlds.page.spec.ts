import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldsPage } from './worlds.page';

describe('WorldsPage', () => {
  let component: WorldsPage;
  let fixture: ComponentFixture<WorldsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorldsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
