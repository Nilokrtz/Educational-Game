import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PiratesSceneryPage } from './pirates-scenery.page';

describe('PiratesSceneryPage', () => {
  let component: PiratesSceneryPage;
  let fixture: ComponentFixture<PiratesSceneryPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PiratesSceneryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
