# Project Blueprint

## Overview

This project is a personal portfolio website designed to showcase projects, skills, and achievements. It features a modern, futuristic design with a focus on creating an engaging and interactive user experience. The application is built with Next.js and utilizes a component-based architecture for easy maintenance and scalability. It now includes a dedicated portfolio page to display projects in a gallery format.

## Design and Style

- **Theme:** Dark, futuristic, and tech-inspired.
- **Font:** Orbitron, a geometric sans-serif typeface, is used for headings and body text to create a cohesive, modern look.
- **Color Palette:** The primary colors are black, white, and a vibrant cyan (#7df9ff), with accents of magenta (#ff00c1) for a striking visual contrast.
- **Layout:** The main page features a three-column layout, with a central column for the main content and two side columns for additional information. Project cards are displayed in a horizontally scrollable row with a fixed width and height, ensuring a consistent and organized presentation. The portfolio page uses a responsive grid layout.
- **Visual Effects:** A "glitch" effect is applied to the main heading for a dynamic, eye-catching animation.
- **Iconography:** The application uses modern, interactive icons to enhance user understanding and navigation.
- **Interactivity:** Buttons, links, and other interactive elements have a shadow and glow effect to create a tactile feel.

## Features

- **Responsive Design:** The application is fully responsive and adapts to different screen sizes, ensuring a seamless experience on both mobile and desktop devices.
- **Project Showcase:** The projects page displays a horizontally scrollable list of project cards, each with an image, title, description, and a link to the project.
- **Portfolio Page:** A new portfolio page displays projects in a responsive grid layout, providing a visually appealing gallery of work.
- **Image Optimization:** The application uses a custom image loader to optimize images for performance, ensuring fast loading times.
- **Navigation:** A dropdown menu provides easy access to all pages of the application.
- **Skills and Achievements:** Dedicated pages for skills and achievements provide a comprehensive overview of qualifications and accomplishments.
- **Accessibility:** The application is designed with accessibility in mind, ensuring it is usable by a wide range of users.

## Current Plan and Steps

### Objective: Revert Electric Border

The goal of this task is to remove the `ElectricBorder` component and restore the website to its previous state.

### Steps:

1.  **Revert Homepage:** Remove the `ElectricBorder` component from the `src/app/page.tsx` file and restore the original content.

2.  **Revert Project Cards:** Remove the `ElectricBorder` component from the `src/components/ProjectCard.tsx` file.

3.  **Delete Component Files:** Delete the `src/components/ElectricBorder.tsx` file.

4.  **Update Blueprint:** Update the `blueprint.md` file to reflect the removal of the `ElectricBorder` component.
