import { Component } from '@angular/core';

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css']
})
export class LanguagePageComponent {
  // Define translations
  translations: { [key: string]: { welcome: string; description: string } } = {
    en: {
      welcome: "Welcome to RedBus!",
      description: "Choose your destination and book a bus!",
    },
    fr: {
      welcome: "Bienvenue chez RedBus!",
      description: "Choisissez votre destination et réservez un bus!",
    }
  };

  selectedLanguage: string = 'en'; // Default language
  welcomeMessage: string = this.translations[this.selectedLanguage].welcome;
  description: string = this.translations[this.selectedLanguage].description;

  changeLanguage(): void {
    this.welcomeMessage = this.translations[this.selectedLanguage].welcome;
    this.description = this.translations[this.selectedLanguage].description;
  }
}
