import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyActivityComponent } from './modify-activity.component';

describe('ModifyActivityComponent', () => {
  let component: ModifyActivityComponent;
  let fixture: ComponentFixture<ModifyActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
