import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponontsTreeComponent } from './compononts-tree.component';

describe('ComponontsTreeComponent', () => {
  let component: ComponontsTreeComponent;
  let fixture: ComponentFixture<ComponontsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponontsTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponontsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
