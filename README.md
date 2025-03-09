# Word Explainer Chrome Extension

A Chrome extension that provides quick and concise explanations for selected words using the Hugging Face LLM API (FLAN-T5-base model).

## Features

- Right-click context menu integration for word selection
- Quick 5-line explanations for selected words
- Clean and intuitive popup interface
- Loading indicator for API requests
- Error handling and user feedback

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Select any word or phrase on a webpage
2. Right-click and choose "Explain [selected text]"
3. A popup will appear with a loading indicator
4. The explanation will be displayed in the popup window
5. The popup can be reopened from the extension icon to view the last explanation

## Technical Details

- Built with Chrome Extension Manifest V3
- Uses the Hugging Face Inference API with the FLAN-T5-base model
- Implements Chrome Storage API for state management
- Features a responsive popup UI with CSS animations
- Background service worker for API communication

## Files Structure

- `manifest.json`: Extension configuration and permissions
- `background.js`: Service worker for context menu and API handling
- `popup.html`: Extension popup interface
- `popup.js`: Popup UI logic and state management
- `icons/`: Extension icons in various sizes

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
