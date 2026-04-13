<img src="https://github.com/bashaus/bashkim-com/raw/main/packages/design-system/src/brand/InlineLogo/inline-logo.png" width="252" height="72" />

## Why does this repository exist?

I believe that the best way to measure a developer's craft is through the care they put into real-world projects, rather than high-pressure technical examinations. Traditional coding tests often prioritize abstract algorithms over the practical, thoughtful architecture required in our daily work.

This repository exists as an open-source alternative to the standard interview process. By sharing my actual workflow, documentation, and code quality standards, I hope to respect our collective time. My goal is to provide you with a transparent look at how I solve problems, so we can spend our time together discussing strategy and collaboration rather than solving puzzles.

## Services

### Portfolio website

The personal portfolio of **Bashkim Isai**, engineered with **Next.js** for high performance and a fluid user experience. This repository serves as the central source of truth for the site's deployment and content.

[![Website][img:website]][url:website]

### Design system

A library of reusable components and **UI patterns** documented through **Storybook**. By isolating the visual layer, this system ensures strict brand consistency and streamlines the handoff between design and development.

[![Design system][img:storybook]][url:storybook]

### Content management

The site’s content is decoupled from the codebase using **Prismic** as a headless CMS. By leveraging their **GraphQL** API, the application fetches structured data with precise queries, reducing payload sizes and ensuring type safety.

[![Content management with Prismic][img:prismic]][url:prismic]

### CI: Continuous Integration

Every commit is validated through **GitHub Actions** to maintain strict quality and security standards. This pipeline includes automated code scanning via **CodeQL** and **SonarCloud** to proactively identify vulnerabilities and technical debt before they reach production.

To ensure a performant and bug-free user experience, **Playwright** E2E tests and **Lighthouse** audits are integrated into the core workflow – triggered on a daily schedule, via manual dispatch, and automatically for every Vercel preview deployment. This validates the integrity of new features in real-time.

[![GitHub Actions][img:github-actions]][url:github-actions]

### CD: Continuous Delivery

Production deployments are automated through **Vercel**, ensuring that every change merged into the main branch is instantly live, leveraging an edge network for high performance. For every pull request, a unique Preview Deployment is generated for isolated testing, ensuring zero-downtime updates through atomic deployments.

[![Vercel][img:vercel]][url:vercel]

### Static Analysis

To maintain a clean and maintainable codebase, **SonarQube Cloud** is integrated as an automated quality gate. It scans every pull request for code smells, complexity, and potential bugs, ensuring that technical debt is addressed early. By enforcing these high standards, the project remains scalable and follows industry best practices for security and performance.

[![SonarCloud][img:sonarcloud]][url:sonarcloud]

## Development

After cloning this repository, you can begin developing by running the following:

```bash
# Install node
nvm install

# Install npm dependencies
npm install

# Initialize
# Follow the prompts to generate the .env files
npx turbo gen init

# Begin development
npm run dev
```

[img:storybook]: https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white
[url:storybook]: https://ui.bashkim.com
[img:sonarcloud]: https://img.shields.io/badge/SonarQube_Cloud-126ED3?logo=sonarqubecloud&logoColor=white
[url:sonarcloud]: https://sonarcloud.io/summary/new_code?id=bashaus%3Abashkim-com
[img:github-actions]: https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white
[url:github-actions]: https://github.com/bashaus/bashkim-com/actions
[img:website]: https://img.shields.io/badge/Website-000000?logo=nextdotjs&logoColor=white
[url:website]: https://www.bashkim.com
[img:vercel]: https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white
[url:vercel]: https://vercel.com/bashaus-projects
[url:prismic]: https://bashkim-com.prismic.io/
[img:prismic]: https://img.shields.io/badge/Prismic-5163BA?logo=prismic&logoColor=white
