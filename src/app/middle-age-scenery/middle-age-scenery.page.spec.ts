import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiddleAgeSceneryPage } from './middle-age-scenery.page';

describe('MiddleAgeSceneryPage', () => {
  let component: MiddleAgeSceneryPage;
  let fixture: ComponentFixture<MiddleAgeSceneryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiddleAgeSceneryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
