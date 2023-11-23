import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Level1Page } from './level1.page';

describe('Level1Page', () => {
  let component: Level1Page;
  let fixture: ComponentFixture<Level1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Level1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
