Blog Posts Application

This application showcases the implementation of core and advanced features for displaying and managing blog posts. Below are the details of the features and technologies used in the project.

Core Features
- Display Recent Blog Posts: A list of the most recent blog posts is displayed, including their titles, short descriptions, and publication dates.
- Search Functionality: A search bar is provided to filter blog posts by keywords.
- Server-Side Rendering (SSR): Blog data is fetched and displayed using SSR for improved performance and SEO.
- Custom Code for Missing API Data:
    - Publication Dates: As the fake API does not include dates, custom logic was written to assign dates to each blog post, assuming one blog post is published per day.
    - Author Names: Since the fake API does not provide author names, random author names are assigned to the posts.

Advanced Features (Bonus Points)
- Load More Functionality: Users can load additional blog posts with a “Load More” button.
- Dark Mode: Implemented dark mode using Tailwind CSS's dark mode support.
- Performance Optimization:
    - Optimized images using Next.js's Image component for better performance and faster loading times.
    - Implemented responsive design for all breakpoints, ensuring compatibility across devices.
Accessibility:
- Added ARIA roles and improved keyboard navigation for better accessibility.
Unit Testing:
- Developed unit tests for critical components using Jest and React Testing Library to ensure code reliability and maintainability.
Technologies Used
- State Management: Zustand is used for efficient and lightweight state management.
- Styling: Tailwind CSS is utilized for styling, enabling rapid and responsive UI development.
- Responsive Design: Fully responsive design implemented for seamless user experience across all devices.
- Next.js: Leveraged for SSR and CSR, image optimization, and general application framework.
 run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
