import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicInfoPagePage } from './basic-info-page.page';

describe('BasicInfoPagePage', () => {
  let component: BasicInfoPagePage;
  let fixture: ComponentFixture<BasicInfoPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
