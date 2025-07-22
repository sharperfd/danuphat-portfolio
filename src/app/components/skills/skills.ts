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
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: '.NET C#', level: 85, category: 'language' },
    { name: 'JavaScript', level: 75, category: 'language' },
    { name: 'TypeScript', level: 70, category: 'language' },
    { name: 'Dart', level: 70, category: 'language' },
    { name: 'Python', level: 80, category: 'language' },
    { name: 'SQL', level: 80, category: 'language' },
    { name: 'HTML', level: 80, category: 'language' },
    { name: 'CSS', level: 80, category: 'language' },
    { name: 'Angular', level: 80, category: 'framework' },
    { name: 'Bootstrap', level: 80, category: 'framework' },
    { name: 'Vue.js', level: 80, category: 'framework' },
    { name: 'Flutter', level: 70, category: 'framework' },
    { name: 'SQL Server', level: 80, category: 'database' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'PostgreSQL', level: 80, category: 'database' },
    { name: 'MySQL', level: 80, category: 'database' },
    { name: 'Elasticsearch', level: 70, category: 'other' },
    { name: 'RabbitMQ', level: 70, category: 'other' },
    { name: 'Docker', level: 60, category: 'other' },
    { name: 'Git', level: 80, category: 'other' },
    { name: 'Agile Methodologies', level: 80, category: 'other' },
    { name: 'RESTful APIs', level: 80, category: 'other' },
    { name: 'Automated Testing', level: 75, category: 'other' },
    { name: 'Unit Testing', level: 80, category: 'other' },
    { name: 'CI/CD', level: 70, category: 'other' },
    { name: 'Kubernetes', level: 60, category: 'other' },
  ];

  languages: Skill[] = [];
  databases: Skill[] = [];
  frameworks: Skill[] = [];
  others: Skill[] = [];

  ngOnInit() {
    this.languages = this.skills.filter((s) => s.category === 'language');
    this.databases = this.skills.filter((s) => s.category === 'database');
    this.frameworks = this.skills.filter((s) => s.category === 'framework');
    this.others = this.skills.filter((s) => s.category === 'other');
  }
}
