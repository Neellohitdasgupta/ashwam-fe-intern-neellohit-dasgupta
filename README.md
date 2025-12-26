# Daily Health Check-in App

A premium, calm, and user-friendly responsive React frontend for daily health symptom tracking.

## Features

- **Conversational UI**: Feels like noting what your body said, not filling a medical form
- **Responsive Design**: Mobile-first with two-column desktop layout
- **Calm Aesthetic**: Soft colors, rounded cards, gentle animations
- **Touch-Friendly**: Large buttons optimized for mobile use
- **No Form Submission**: Auto-saves to local React state
- **Symptom Categories**: Energy, Muscles & Joints, Head & Concentration, Gut & Digestion

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Select up to 5 symptoms from the categorized chips
2. For each selected symptom, specify:
   - Severity (😌 Mild, 😐 Moderate, 😣 Severe)
   - Duration (Minutes, Hours, All day)
   - Impact on daily activities (Yes/No)
3. Remove symptoms by clicking the × button on each card

## Tech Stack

- **Framework**: React.js (functional components)
- **Language**: JavaScript
- **Styling**: Plain CSS (no UI libraries)
- **State**: React useState only
- **No backend/APIs required**

## Project Structure

```
src/
├─ components/
│   ├─ SymptomPicker.jsx    # Symptom selection chips
│   ├─ SymptomCard.jsx      # Individual symptom detail card
│   ├─ SymptomList.jsx      # Container for symptom cards
├─ styles/
│   ├─ App.css              # Main app layout
│   ├─ SymptomPicker.css    # Symptom selection styling
│   ├─ SymptomCard.css      # Card component styling
│   ├─ SymptomList.css      # Card container styling
├─ App.jsx                  # Main app component
├─ index.js                 # React entry point
```

## Design Philosophy

- Calm, reassuring, minimal health-app aesthetic
- Lots of whitespace and soft spacing
- Rounded cards with subtle borders
- Gentle animations (fade/slide)
- Large, touch-friendly buttons
- Easy one-handed mobile use
- Not flashy, not clinical, not crowded