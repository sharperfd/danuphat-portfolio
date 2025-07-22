import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProfileComponent } from './components/profile/profile';
import { EducationComponent } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import { PortfolioComponent } from './components/portfolio/portfolio';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'portfolio', component: PortfolioComponent },
    ],
  },
];
