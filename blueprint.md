# Project Blueprint

## Overview

This project is a personal portfolio website designed to showcase projects, skills, and achievements. It features a modern, futuristic design with a focus on creating an engaging and interactive user experience. The application is built with Next.js and utilizes a component-based architecture for easy maintenance and scalability.

## Design and Style

- **Theme:** Dark, futuristic, and tech-inspired.
- **Font:** Orbitron, a geometric sans-serif typeface, is used for headings and body text to create a cohesive, modern look.
- **Color Palette:** The primary colors are black, white, and a vibrant cyan (#7df9ff), with accents of magenta (#ff00c1) for a striking visual contrast.
- **Layout:** The main page features a three-column layout, with a central column for the main content and two side columns for additional information. Project cards are displayed in a horizontally scrollable row with a fixed width and height, ensuring a consistent and organized presentation.
- **Visual Effects:** A "glitch" effect is applied to the main heading for a dynamic, eye-catching animation. Project cards and other elements are wrapped in an "ElectricBorder" component, which adds a vibrant, animated border. The border has a subtle chaos effect and a soft glow, creating a futuristic feel.
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

### Objective: Fix Electric Border and Firebase Configuration

The goal of this task is to resolve the error related to the Firebase project configuration and to correctly apply the `ElectricBorder` component with the intended parameters.

### Steps:

1.  **Configure Firebase MCP:** Create the `.idx/mcp.json` file to ensure the IDE can communicate with Firebase services.

2.  **Update Homepage:** Wrap the profile image and stat cards with the `ElectricBorder` component, using the specified parameters:
    - `color`: `#7df9ff`
    - `speed`: `1`
    - `chaos`: `0.5`
    - `thickness`: `2`
    - `style`: `{ borderRadius: 16 }` (or `50%` for the profile image)

3.  **Update Project Cards:** Apply the same `ElectricBorder` configuration to the project cards.

4.  **Fix Positioning:** In `ElectricBorder.css`, change the positioning of the SVG element from `fixed` to `absolute` to prevent erratic behavior on hover.

5.  **Reduce Chaos:** In `ElectricBorder.tsx`, adjust the chaos calculation to create a more subtle distortion effect.

These changes will resolve the error, apply the intended design, and ensure the `ElectricBorder` component functions correctly.
