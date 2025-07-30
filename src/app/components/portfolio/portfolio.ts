import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links?: {
    name: string;
    url: string;
  }[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Enterprise Resource Planning System',
      description:
        'A comprehensive ERP solution for manufacturing companies with modules for inventory, sales, procurement, and accounting.',
      technologies: ['.NET Core', 'Vue.js', 'SQL Server', 'RabbitMQ'],
      image: 'avalon.jpg',
      links: [{ name: 'Live Demo', url: 'https://erp-demo.example.com' }],
    },
    {
      title: 'Di-Sales Mobile Application',
      description:
        'Cross-platform mobile application for sales representatives to manage orders and customer data.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Gherkin', 'Cucumber'],
      image: 'disales.jpg',
      links: [
        {
          name: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.krungsri.disales&pcampaignid=web_share',
        },
        {
          name: 'App Store',
          url: './assets/app-installer/di-sales 41.0.0.ipa',
        },
      ],
    },
    {
      title: 'Retail Lending Application',
      description:
        'Web application for admin to manage mortgage loan and lending developer.',
      technologies: [
        'Angular.js',
        '.NET 8',
        'Bootstrap 5',
        'SQL Server',
        'Playwright',
        'Karma',
        'Jasmine',
        'MQ',
      ],
      image: 'lamp.jpg',
      links: [{ name: 'Live Demo', url: 'https://lamp-demo.example.com' }],
    },
  ];

  hoveredProject: number | null = null;

  setHover(index: number | null) {
    this.hoveredProject = index;
  }
}
