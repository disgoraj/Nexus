# Nexus: Where Stories Connect

Welcome to Nexus, an interactive web application that transforms simple color patterns into magical, kid-friendly stories. Using the power of generative AI, Nexus analyzes images of 3x3 color grids and reveals a unique story associated with the detected pattern.

## Workflow

```mermaid
graph TD
    subgraph Client (Browser)
        A[User Uploads Image or Uses Webcam] --> B{ImageUploader Component};
        B --> C[Image converted to Data URI];
        C --> D{MainPage Component};
    end

    subgraph Server (Next.js Backend)
        E[detectColorsFromImage Server Action] --> F{enhanceColorDetection Genkit Flow};
        F --> G((Gemini AI Model));
        G -- Returns 3x3 Color Matrix --> F;
    end

    subgraph Client (Browser)
        H[matchPattern function] --> I[Finds matching story in storyTemplates];
        I --> J{StoryPlayer Component};
        J --> K[Story is Displayed to User];
    end

    D -- Calls Server Action w/ Data URI --> E;
    F -- Returns Matrix to Client --> H;

    style A fill:#f9f9f9,stroke:#333,stroke-width:2px
    style K fill:#d4edda,stroke:#155724,stroke-width:2px
    style G fill:#f8d7da,stroke:#721c24,stroke-width:2px
```

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
