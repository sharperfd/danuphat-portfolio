# Danuphat Panwong's Portfolio

Welcome to my personal portfolio website, showcasing my skills, education, and professional journey as a Software Engineer. This project is built with **Angular 19+** using standalone components, Bootstrap for styling, and Font Awesome for icons, demonstrating my expertise in modern web development.

## Table of Contents
- [About Me](#about-me)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## About Me
I'm **Danuphat Panwong**, a passionate Software Engineer with a Bachelor’s Degree in Computer Engineering from Sripatum University (2013–2016, GPA: 3.96). My expertise spans programming languages, frameworks, databases, and other technologies, with a focus on building robust, user-friendly applications. I have a strong background in Java, C, Python, Angular, and cloud technologies, complemented by certifications and specialized training in software development and IoT.

### Education
- **Bachelor of Computer Engineering**, Sripatum University (2013–2016, GPA: 3.96)
  - Highlights: Java/C/Python Programming, Internet of Things (IoT), Embedded Systems, Machine Vision

### Certifications
- **ICTE-TPQI**: Certified Software and Applications, 2016
- **ICDL**: Certified International Computer Driving License (Database), 2016
- **ITPE**: Certified Information Technology Passport Examination (IP), 2015

### Training
- **The Best of the Best on Embedded Systems Developers**, TESA Top Gun Rally #11, 2017
- **NECTEC Internet of Things Camp**, 2016

## Features
This portfolio website includes the following sections:
- **Home**: A welcome section with my profile picture, title (Software Engineer), and links to my GitHub, LinkedIn, and email.
- **Skills**: A visual representation of my technical skills across programming languages (e.g., .NET C#, TypeScript, Python), frameworks (e.g., Angular, Flutter), databases (e.g., SQL Server, MongoDB), and other technologies (e.g., Docker, Azure).
- **Education**: Details of my academic background, certifications, and training programs.
- **Portfolio** (planned): A showcase of my projects and contributions (to be implemented).

## Technologies Used
- **Frontend**: Angular 17+, Bootstrap 5, Font Awesome, Bootstrap Icons
- **Languages**: TypeScript, HTML, SCSS
- **Tools**: Node.js, npm, Angular CLI
- **Dependencies**:
  - `@angular/core`, `@angular/common`, `@angular/animations`
  - `bootstrap`, `bootstrap-icons`, `@fortawesome/angular-fontawesome`
  - `zone.js` for Angular change detection

## Setup and Installation
To run this portfolio locally, follow these steps:

### Prerequisites
- **Node.js**: Version 18.x or 20.x
- **Angular CLI**: Version 17.x (`npm install -g @angular/cli`)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/sharperfd/danuphat-portfolio.git
   cd danuphat-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run start
   ```
   The application will be available at `http://localhost:4200`.

4. **Build for Production**
   ```bash
   ng build --configuration production
   ```
   The output will be in the `dist/danuphat-portfolio` directory.

### Notes
- Ensure `bootstrap`, `bootstrap-icons`, and `@fortawesome/angular-fontawesome` are installed for styling and icons.
- The project uses standalone Angular components, so no `NgModule` is required.

## Usage
- Navigate to `http://localhost:4200` to view the portfolio.
- Explore sections via the navigation:
  - `/`: Home page with my introduction and social links.
  - `/skills`: View my technical skills with progress bars.
  - `/education`: Learn about my academic background and certifications.
- The `typing-animation` on the home page adds a dynamic effect to my title (Software Engineer).

## Contact
Feel free to reach out to me:
- **GitHub**: [github.com/sharperfd](https://github.com/sharperfd)
- **LinkedIn**: [linkedin.com/in/danuphat-panwong](https://www.linkedin.com/in/danuphat-panwong/)
- **Email**: [danuphat.pan@gmail.com](mailto:danuphat.pan@gmail.com)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


### Explanation of the README
1. **Overview**:
   - Introduces your portfolio as a showcase of your skills and professional journey.
   - Mentions the use of Angular 17+, standalone components, Bootstrap, and Font Awesome, based on your project’s setup.

2. **About Me**:
   - Includes your name, role (Software Engineer), and education from Sripatum University (2013–2016, GPA: 3.96) with highlights (Java/C/Python, IoT, Embedded Systems, Machine Vision).
   - Lists certifications (ICTE-TPQI, ICDL, ITPE) and training (TESA, NECTEC) from your `EducationComponent`.

3. **Features**:
   - Describes the `Home`, `Skills`, and `Education` sections, matching your provided templates.
   - Notes a planned `Portfolio` section, as referenced in your previous `angular.json` routes.

4. **Technologies Used**:
   - Lists Angular, Bootstrap, Font Awesome, and other dependencies, aligning with your `angular.json` and `HomeComponent` (using `<fa-icon>`).

5. **Setup and Installation**:
   - Provides clear instructions to clone, install, and run the project, tailored to Angular 17+.
   - Includes prerequisites (Node.js, Angular CLI) and notes about standalone components.

6. **Contact**:
   - Incorporates your GitHub (`https://github.com/sharperfd`), LinkedIn (`https://www.linkedin.com/in/danuphat-panwong/`), and email (`danuphat.pan@gmail.com`), matching your `HomeComponent`.

7. **License**:
   - Assumes an MIT License, standard for personal portfolios. You can adjust this if needed.

### Integration with Your Project
1. **Save the README**:
   - Place the provided `README.md` in the root of your `danuphat-portfolio` project (next to `angular.json`).
   - Commit it to your GitHub repository (`https://github.com/sharperfd/danuphat-portfolio`).

2. **Verify Dependencies**:
   - Ensure all mentioned dependencies are installed:
     ```bash
     npm install bootstrap bootstrap-icons @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome zone.js @angular/animations
     ```
   - Check `package.json` to confirm versions align with Angular 17+ (e.g., `^17.0.0` for Angular packages, `^0.14.0` for `zone.js`).

3. **Update `angular.json`**:
   - Your `angular.json` (from previous fixes) is correctly set up with `polyfills: ["zone.js"]` and Bootstrap styles. No changes are needed unless you encounter new errors.

4. **Run the Project**:
   - Ensure your `main.ts` includes `import 'zone.js'` (from the previous fix):
     ```typescript
     import 'zone.js';
     import { bootstrapApplication } from '@angular/platform-browser';
     import { appConfig } from './app/app.config';
     import { AppComponent } from './app/app.component';

     bootstrapApplication(AppComponent, appConfig);
     ```
   - Run:
     ```bash
     npm run start
     ```

5. **Push to GitHub**:
   - If you haven’t already, initialize a Git repository and push to `https://github.com/sharperfd/danuphat-portfolio`:
     ```bash
     git add README.md
     git commit -m "Add README for portfolio"
     git remote add origin https://github.com/sharperfd/danuphat-portfolio.git
     git push -u origin main
     ```
   - If the repository doesn’t exist, create it on GitHub first.