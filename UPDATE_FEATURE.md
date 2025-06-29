# Update Feature Documentation

## Overview
The Update feature allows you to customize the speaker cards that appear on the Activities section of your website. This feature works entirely client-side using localStorage, making it compatible with hosting platforms like Vercel without requiring a backend.

## How to Access
1. Navigate to your website
2. Click the "Update" button in the header navigation
3. Or visit `/update` directly

## Features

### Edit Speaker Information
- **Name**: Change the speaker's display name
- **Category**: Modify the category tag (e.g., Keynote, Development, Design)
- **Description**: Update the speaker's biography/description
- **Background Color**: Choose from predefined color options for the card background
- **Image Position**: Adjust how the speaker image is positioned within the card

### Manage Speakers
- **Add New Speaker**: Create additional speaker cards
- **Remove Speaker**: Delete unwanted speakers (minimum of 1 speaker required)
- **Reset to Default**: Restore all speakers to the original configuration

### Real-time Updates
- Changes are saved to localStorage and immediately available
- The Activities section updates automatically when you save changes
- No page refresh required to see updates

## Technical Details

### Storage
- All speaker data is stored in the browser's localStorage
- Data persists between sessions
- Compatible with all modern browsers

### Hosting Compatibility
- Works on Vercel, Netlify, GitHub Pages, and any static hosting platform
- No server-side database required
- No API endpoints needed

### File Structure
```
src/
├── pages/
│   └── Update.jsx          # Main update interface
├── components/
│   ├── Activities.jsx      # Speaker display component (modified to use localStorage)
│   └── Header.jsx          # Navigation with Update link
└── App.jsx                 # Router configuration
```

## Usage Instructions

1. **To Edit a Speaker**:
   - Navigate to the Update page
   - Find the speaker you want to edit
   - Modify any of the fields (name, category, description, etc.)
   - Click "Save All Changes"

2. **To Add a New Speaker**:
   - Click "Add New Speaker" button
   - Fill in the new speaker's information
   - Choose background color and image position
   - Save changes

3. **To Remove a Speaker**:
   - Click the "Remove" button on the speaker card you want to delete
   - Confirm the action
   - Save changes

4. **To Reset Everything**:
   - Click "Reset to Default" button
   - Confirm you want to restore original speakers
   - This action cannot be undone

## Default Speakers
The system comes with 5 default speakers:
1. Vlad Magdalin (Keynote)
2. Ilja van Eck (Development)
3. Cassie Evans (Animation)
4. Stephanie Bruce (Design)
5. Ross Plaskow (Animation)

## Browser Support
- Chrome/Edge 55+
- Firefox 51+
- Safari 10.1+
- All browsers that support localStorage and ES6 features

## Troubleshooting

**Changes not showing**: Make sure you clicked "Save All Changes" and received the confirmation alert.

**Lost data**: If localStorage is cleared by the browser or user, data will reset to defaults. Consider backing up your speaker configurations.

**Performance**: The application can handle dozens of speakers without performance issues.

## Development Notes
- Speaker data structure includes: name, category, description, bgColor, and imgStyle
- Images currently use a single source file with different positioning
- Color options are predefined Tailwind CSS classes
- Event system ensures real-time updates across components
