# FoundersCircle.one

A React + TypeScript + Vite application for Founders Circle, a community platform for entrepreneurs. The site uses modern React features, Tailwind CSS for styling, and Formspree for handling form submissions.

## Project Structure

```
FoundersCircle.one/
├── .github/              # GitHub Actions workflows for deployment
├── api/                  # API endpoints for form handling
├── src/                  # Source code
│   ├── assets/           # Static assets
│   ├── components/       # React components
│   │   ├── ApplicationForm.tsx  # Form with Formspree integration
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── SelectionProcess.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ThankYou.tsx
│   │   ├── WhyItWorks.tsx
│   │   ├── WhyUs.tsx
│   │   └── YourRole.tsx
│   ├── config/           # Configuration files
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Public static files
├── netlify/              # Netlify configuration
└── vercel.json           # Vercel deployment configuration
```

## Form Handling with Formspree

This project uses [Formspree](https://formspree.io/) to handle form submissions. The main application form is located in `src/components/ApplicationForm.tsx`.

### Formspree Token

The Formspree form uses a token that expires periodically (typically annually). The current token is `mzzekrlp`, which is used in the ApplicationForm.tsx component.

When you receive a notification about token expiration, you'll need to update it in the ApplicationForm component:

1. Log in to [Formspree](https://formspree.io/)
2. Get the new form token
3. Update the form action URL in the ApplicationForm.tsx component
   - Look for the line: `const formspreeUrl = 'https://formspree.io/f/mzzekrlp';`
   - Replace `mzzekrlp` with your new token

## Deployment

This site is deployed on GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`. Deployment is automatically triggered when changes are pushed to the main branch.

The GitHub Action workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Creates a 404.html for client-side routing
6. Uploads and deploys to GitHub Pages

There's also a form handler workflow that can process form submissions through GitHub Actions.

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Additional Configurations

The project includes configurations for multiple deployment platforms:
- GitHub Pages (primary deployment)
- Vercel (configured via vercel.json)
- Netlify (configured via netlify.toml and netlify/functions)

## API Endpoints

The `/api` directory contains several endpoints for handling form submissions and email sending:
- `/api/contact.js` - Contact form handler
- `/api/form-submit.js` - Form submission handler
- `/api/submit-form.js` - Another form submission handler
- `/api/send-email.js` - Email sending functionality
