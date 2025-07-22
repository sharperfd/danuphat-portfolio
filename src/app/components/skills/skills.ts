import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: '.NET C#', level: 95, category: 'language' },
    { name: 'TypeScript', level: 90, category: 'language' },
    { name: 'Dart', level: 85, category: 'language' },
    { name: 'Python', level: 80, category: 'language' },
    { name: 'SQL', level: 90, category: 'language' },
    { name: 'Angular', level: 92, category: 'framework' },
    { name: 'Vue.js', level: 88, category: 'framework' },
    { name: 'Flutter', level: 90, category: 'framework' },
    { name: 'React Native', level: 75, category: 'framework' },
    { name: 'SQL Server', level: 90, category: 'database' },
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'PostgreSQL', level: 88, category: 'database' },
    { name: 'RabbitMQ', level: 80, category: 'other' },
    { name: 'Docker', level: 85, category: 'other' },
    { name: 'Azure', level: 82, category: 'other' },
    { name: 'Git', level: 95, category: 'other' }
  ];

  languages: Skill[] = [];
  databases: Skill[] = [];
  frameworks: Skill[] = [];
  others: Skill[] = [];

  ngOnInit() {
    this.languages = this.skills.filter(s => s.category === 'language');
    this.databases = this.skills.filter(s => s.category === 'database');
    this.frameworks = this.skills.filter(s => s.category === 'framework');
    this.others = this.skills.filter(s => s.category === 'other');
  }
}