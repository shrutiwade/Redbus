import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LanguagePageComponent } from './language-page.component';

describe('LanguagePageComponent', () => {
  let component: LanguagePageComponent;
  let fixture: ComponentFixture<LanguagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagePageComponent],
      imports: [FormsModule] // Import FormsModule for ngModel
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message in English by default', () => {
    expect(component.welcomeMessage).toBe('Welcome to RedBus!');
  });

  it('should switch to French when selected', () => {
    component.selectedLanguage = 'fr';
    component.changeLanguage();
    expect(component.welcomeMessage).toBe('Bienvenue chez RedBus!');
  });
});
