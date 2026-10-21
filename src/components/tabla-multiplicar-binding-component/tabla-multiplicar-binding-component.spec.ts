import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarBindingComponent } from './tabla-multiplicar-binding-component';

describe('TablaMultiplicarBindingComponent', () => {
  let component: TablaMultiplicarBindingComponent;
  let fixture: ComponentFixture<TablaMultiplicarBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarBindingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
