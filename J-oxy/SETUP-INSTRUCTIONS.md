# Setup Instructions for Profile Picture

## Adding Your Profile Picture

1. **Add your profile photo** to the `public` folder:
   - Name it `profile.jpg` (or `profile.png`)
   - Place it in: `c:\Users\admin\Documents\GitHub\J-oxy\public\profile.jpg`

2. **The ClipPathLinks component** will automatically display it in the bottom-right position of the grid.

## Current Social Media Links Configuration

✅ **Integrated and Live:**

**Top Row (4 icons):**
- Twitter/X: https://twitter.com/Jay_Mathukiya_
- GitHub: https://github.com/jay-021/
- LinkedIn: https://www.linkedin.com/in/jay-mathukiya-
- Instagram: https://www.instagram.com/jay_mathukiya_021

**Bottom Row (3 icons):**
- Facebook: https://www.facebook.com/jayp021
- Discord: https://discord.gg/HTB2qC6r
- Oxylabs Logo: https://oxylabs.io (redirects to Oxylabs homepage)

## After Netlify Deployment

Once you deploy to Netlify, you can add your profile picture link:

1. Get your Netlify URL (e.g., `https://jay-oxylabs-portfolio.netlify.app`)
2. Update the profile picture link in `components/ui/clip-path-links.tsx`:

```tsx
// Change this line (currently around line 31):
<LinkBox 
  href="https://oxylabs.io"
  imgSrc="https://oxylabs.io/favicon.ico"
  className="h-8 w-auto object-contain"
/>

// To add a profile picture link that redirects to your portfolio:
<LinkBox 
  href="https://your-site.netlify.app"  // Your Netlify URL
  imgSrc="/profile.jpg"
  className="h-10 w-10 rounded-full object-cover"
/>
```

## Component Location

The ClipPathLinks component is integrated at the bottom of the hero section in:
- File: `app/page.tsx`
- Location: Absolute positioned at `bottom-8 left-8 right-8`

## Preview the Site

🚀 **Your site is currently running at:**
- Local: http://localhost:3001
- Network: http://192.168.22.221:3001

Open your browser and check the bottom-left section of the hero to see the animated social media links!

## Features

✨ **ClipPathLinks Component Features:**
- **Hover Animations**: Directional clip-path animations based on mouse entry point
- **Oxylabs Theme**: Cyan gradient hover effects matching your brand
- **Grid Layout**: 4 columns (top row) + 3 columns (bottom row)
- **Responsive**: Scales for different screen sizes

## Next Steps

1. ✅ Add your profile picture to `public/profile.jpg`
2. ✅ Test all social media links
3. ✅ Deploy to Netlify
4. ✅ Update profile picture href with Netlify URL
