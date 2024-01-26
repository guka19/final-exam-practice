import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Notes App';

  constructor(private translate: TranslateService) {
    
  }

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'ge' : 'en';
    this.translate.use(newLang);
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
