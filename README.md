# Hitchr Website

This is the official website for Hitchr, built with Jekyll and designed to be hosted on GitHub Pages.

## Local Development

### Option 1: Docker (Recommended)

The easiest way to run the site locally without installing Ruby/Jekyll on your machine:

#### Quick Start
```bash
docker run --rm -it -p 4000:4000 -v "%cd%":/srv/jekyll jekyll/jekyll:latest jekyll serve --host 0.0.0.0
```

#### Using Docker Compose (Best for Development)
```bash
docker-compose up
```

This provides:
- Live reload (changes auto-refresh the browser)
- Dependency caching for faster startup
- No local Ruby/Jekyll installation required

**Access the site**: Open your browser and go to `http://127.0.0.1:4000`

> **Note**: Use `127.0.0.1:4000` instead of `localhost:4000` if you're on Windows and localhost doesn't work.

#### Stop the Development Server
```bash
docker-compose down
```

### Option 2: Native Ruby/Jekyll

If you prefer to install Jekyll locally:

1. Make sure you have Ruby installed (version 2.7.0 or higher)
2. Install Jekyll and Bundler:
   ```bash
   gem install jekyll bundler
   ```
3. Clone this repository
4. Install dependencies:
   ```bash
   bundle install
   ```
5. Start the local development server:
   ```bash
   bundle exec jekyll serve
   ```
6. Visit `http://localhost:4000` in your browser

## Project Structure

- `_layouts/` - Contains the main layout templates
- `assets/` - Contains CSS, JavaScript, and image files
- `_config.yml` - Jekyll configuration file
- `*.html` - Individual page files

## Deployment

This site is configured to be deployed on GitHub Pages. To deploy:

1. Push your changes to the `main` branch
2. GitHub Pages will automatically build and deploy the site

## Customization

- Colors and fonts can be modified in `assets/css/main.css`
- Content can be edited in the respective HTML files
- Configuration settings can be adjusted in `_config.yml`

## Contributing
- Submit an issue
- or, submit a Pull Request

## License

All rights reserved © Hitchr 
