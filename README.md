# React Email Builder

## Description

Not many particularly enjoy building plain HTML/CSS email templates, and for good reason--it quickly becomes a long and messy document of inline styles, tables, and MSO/IE conditionals. Even with tools like Unlayer that attempt to simplify the development process, one must still parse through the resulting HTML document to make adjustments for capricious email clients. Plus, the whole process just feels antiquated and dull when held in comparison to newer approaches to web development such as React. This repository attempts to abstract away the pains of building email templates by leveraging the modularity, organized folder structure, and reusable components of React to improve developer experience and efficiency.

## Technology

- React
- Typescript
- Storybook

## Usage

- Run `yarn start` to start up the development server in which src/App.tsx is injected into public/index.html
- Run `yarn storybook` to start up Storybook
- Run `yarn render` to run the script contained in src/render.tsx which compiles the contents of src/App.tsx and injects the resulting markup and styles into template.html to generate output.html.

## Folder Structure

Atomic modules (contained in src/components/atoms) are generic modules that abstract away the nuances of HTML email building. Slight stylistic modifications will be likely necessary to achieve design requirements.

Molecular modules (contianed in src/components/molecules) are modules that combine atomic modules. These are likely to be more project specific, and less flexible than atomic modules.

Organismic modules (contained in src/components/organisms) are project specific modules that are constructed from a combination of atomic and molecular modules. The demonstration presented in this repository contains organisms that correspond to each section (or row) of the overall email build.
