# Project Blueprint

## Overview

This project is a personal portfolio website designed to showcase projects, skills, and achievements. It features a modern, futuristic design with a focus on creating an engaging and interactive user experience. The application is built with Next.js and utilizes a component-based architecture for easy maintenance and scalability.

## Design and Style

- **Theme:** Dark, futuristic, and tech-inspired.
- **Font:** Orbitron, a geometric sans-serif typeface, is used for headings and body text to create a cohesive, modern look.
- **Color Palette:** The primary colors are black, white, and a vibrant magenta (#ff00c1), with accents of cyan (#00fff9) for a striking visual contrast.
- **Layout:** The main page features a three-column layout, with a central column for the main content and two side columns for additional information. Project cards are displayed in a horizontally scrollable row with a fixed width and height, ensuring a consistent and organized presentation.
- **Visual Effects:** A "glitch" effect is applied to the main heading for a dynamic, eye-catching animation. Project cards have a subtle lift and shadow effect on hover.
- **Iconography:** The application uses modern, interactive icons to enhance user understanding and navigation.
- **Interactivity:** Buttons, links, and other interactive elements have a shadow and glow effect to create a tactile feel.

## Features

- **Responsive Design:** The application is fully responsive and adapts to different screen sizes, ensuring a seamless experience on both mobile and desktop devices.
- **Project Showcase:** The projects page displays a horizontally scrollable list of project cards, each with an image, title, description, and a link to the project.
- **Image Optimization:** The application uses a custom image loader to optimize images for performance, ensuring fast loading times.
- **Navigation:** A dropdown menu provides easy access to all pages of the application.
- **Skills and Achievements:** Dedicated pages for skills and achievements provide a comprehensive overview of qualifications and accomplishments.
- **Accessibility:** The application is designed with accessibility in mind, ensuring it is usable by a wide range of users.

## Current Plan and Steps

### Objective: Standardize Project Card Height

The goal of this task is to ensure all project cards have a uniform height, regardless of the amount of text they contain. This will align the "View Project" buttons at the bottom of each card, creating a clean and consistent design.

### Steps:

1.  **Enable Flexbox for Project Card:** In `src/app/globals.css`, the `.project-card` class was updated to use `display: flex` and `flex-direction: column`.

2.  **Allow Content to Grow:** The `.project-content` class was updated with `flex-grow: 1` to allow it to fill the available space within the card.

3.  **Align Button to Bottom:** The `.project-link` class was updated with `margin-top: auto` to push it to the bottom of the card.

These changes ensure that all project cards have the same height, creating a more organized and visually appealing layout.
