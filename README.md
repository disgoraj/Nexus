# Nexus: Where Stories Connect

Welcome to Nexus, an interactive web application that transforms simple color patterns into magical, kid-friendly stories. Using the power of generative AI, Nexus analyzes images of 3x3 color grids and reveals a unique story associated with the detected pattern.

## Features

- **Image-Based Pattern Detection**: Upload an image or use your device's webcam to capture a 3x3 color grid.
- **AI-Powered Color Analysis**: Leverages a Genkit flow with a powerful generative AI model to accurately detect the colors from the image, even with variations in lighting.
- **Story Matching**: The detected color matrix is matched against a library of predefined patterns.
- **Engaging Story-Telling**: For each matching pattern, a unique, child-friendly story is displayed on the screen.
- **Modern & Responsive UI**: Built with Next.js and shadcn/ui for a clean, intuitive, and responsive user experience on any device.

## How It Works

1.  **Provide a Pattern**: The user is prompted to either upload an image of a 3x3 color grid or use their webcam to capture one live.
2.  **AI Analysis**: The captured image is sent to a serverless Genkit flow. A generative AI model analyzes the image and returns a 3x3 array of the detected colors (e.g., `[['red', 'red', 'red'], ...]`).
3.  **Pattern Matching**: The application compares the AI-generated color matrix against a list of `storyTemplates`.
4.  **Reveal the Story**: If a match is found, the corresponding story's title and text are beautifully displayed. If no match is found, the user is encouraged to try a different pattern.

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Generative AI**: Google's Gemini model accessed via Genkit
- **Platform**: Firebase

This project was created with Firebase Studio. To get started exploring the code, take a look at `src/app/page.tsx` and the `src/ai/flows/` directory.