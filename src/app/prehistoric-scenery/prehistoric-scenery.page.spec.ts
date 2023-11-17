import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrehistoricSceneryPage } from './prehistoric-scenery.page';

describe('PrehistoricSceneryPage', () => {
  let component: PrehistoricSceneryPage;
  let fixture: ComponentFixture<PrehistoricSceneryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrehistoricSceneryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
