# Jane Goodall Presentation - ג'יין גודול: החברה של הקופים

A beautiful, interactive presentation about Jane Goodall created by Milly for her kindergarten class project.

## Features

- 9 beautiful slides telling Jane Goodall's story
- Hebrew (RTL) text with beautiful typography
- Smooth navigation between slides
- Keyboard navigation support (arrow keys, Home, End)
- Responsive design for all screen sizes
- Dark mode support
- Progress indicators
- Beautiful animations and transitions

## Deployment to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Production deployment**:
   ```bash
   vercel --prod
   ```

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Navigation

- **Next Slide**: Click "הבא" button or press Right/Down arrow
- **Previous Slide**: Click "הקודם" button or press Left/Up arrow
- **Home**: Click home icon or press Home key
- **Last Slide**: Press End key

## Project Structure

```
.
├── index.html          # Main HTML file with all slides
├── vercel.json         # Vercel configuration
├── assets/
│   └── images/
│       └── milly.jpg   # Milly's photo for slide 1
└── README.md           # This file
```

## Credits

Created by Milly for her kindergarten class project about Jane Goodall.
