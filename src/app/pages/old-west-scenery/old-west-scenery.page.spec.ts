import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OldWestSceneryPage } from './old-west-scenery.page';

describe('OldWestSceneryPage', () => {
  let component: OldWestSceneryPage;
  let fixture: ComponentFixture<OldWestSceneryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OldWestSceneryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
