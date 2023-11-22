import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoonSceneryPage } from './moon-scenery.page';

describe('MoonSceneryPage', () => {
  let component: MoonSceneryPage;
  let fixture: ComponentFixture<MoonSceneryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoonSceneryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
