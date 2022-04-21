# React Email Builder

## Description
Not many particularly enjoy building plain HTML/CSS email templates, and for good reason--it quickly becomes a long and messy document of inline styles, tables, and MSO/IE conditionals. Even with tools like Unlayer that attempt to simplify the development process, one must still parse through the resulting HTML document to make adjustments for capricious email clients. Plus, the whole process just feels antiquated and dull when held in comparison to newer approaches to web development such as React. This repository attempts to abstract away the pains of building email templates by leveraging the modularity, organized folder structure, and reusable components of React to improve developer experience and efficiency. 

## Technology
- React
- Typescript
- Storybook
- Stitches CSS-in-JS

## Usage
Run `yarn start` to start up the development server in which src/App.tsx is injected into public/index.html
Run `yarn storybook` to start up Storybook
Run `yarn render` to run the script contained in src/render.tsx which compiles the contents of src/App.tsx and injects the resulting markup and styles into template.html to generate output.html.

## Folder Structure
Atomic modules (contained in src/components/atoms) are generic modules that abstract away the nuances of HTML email building. Slight stylistic modifications will be likely necessary to achieve design requirements.

Molecular modules (contianed in src/components/molecules) are modules that combine atomic modules. In this repository, there are only two molecular modules: BgImgWithContent and PromoCard. BgImgWithContent is more generic while PromoCard is more specific to the demonstration email constructed from src/App.tsx.

Organismic modules (contained in src/components/organisms) are project specific modules that are constructed from a combination of atomic and molecular modules. The demonstration presented in this repository contains organisms that correspond to each section (or row) of the overall email build: Header, ContentBlockOne (background image with CTA), ContentBlockTwo (text), ContentBlockThree (promo cards), ContentBlockFour (text), ContentBlockFive (background iamge with CTA), and the Footer.

The theme folder (lib/theme) contains various theme tokens (e.g. colors, fonts) that can be consumed by `createStitches` within src/theme/stitches.config.ts to output CSS-in-JS utilities (css, getCssText, styled, theme) to compose styled components, inline styles, theme variables, or a CSS string used for server-side/static rendering. Global styles can be generated with Stitches using the `globalCss` function. The resulting styles are automatically added when running the development server or storybook, but must be parsed by src/render.tsx for proper injection into template.html during compilation. Learn more from the [Stitches Docs](https://stitches.dev/).