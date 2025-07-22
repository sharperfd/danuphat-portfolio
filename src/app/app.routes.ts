import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProfileComponent } from './components/profile/profile';
import { EducationComponent } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import { PortfolioComponent } from './components/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Danuphat Panwong - Home' },
  { path: 'profile', component: ProfileComponent, title: 'Danuphat Panwong - Profile' },
  { path: 'education', component: EducationComponent, title: 'Danuphat Panwong - Education' },
  { path: 'skills', component: SkillsComponent, title: 'Danuphat Panwong - Skills' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Danuphat Panwong - Portfolio' },
  { path: '**', redirectTo: '' }
];