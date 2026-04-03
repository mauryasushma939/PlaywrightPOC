# PlaywrightPOC
UI Automation using Playwright

## Overview
This is a Proof of Concept (POC) project for UI automation testing using Playwright and TypeScript.

## Features
- Page Object Model (POM) design pattern
- TypeScript for type safety
- Allure reporting integration
- Test execution on Chromium browser

## Project Structure
```
├── test/
│   ├── pages/       # Page Object classes
│   ├── tests/       # Test specifications
│   ├── utils/       # Utility functions
│   ├── constants/   # Test constants
│   └── base/        # Base action utilities
├── playwright.config.ts  # Playwright configuration
└── package.json     # Project dependencies
```

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Installation
```bash
npm install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test test/tests/UserLogin.spec.ts

# Run tests with UI mode
npx playwright test --ui
```

## Generating Reports
```bash
# Generate Allure report
npx allure generate allure-results --clean -o allure-report

# Open Allure report
npx allure open allure-report
```

## Test Cases
- User Login Tests
- Order Products Tests
- Web Elements Operations Tests

## Configuration
Test configuration is managed in `playwright.config.ts` with settings for:
- Browser configuration
- Test timeout and retries
- Screenshot and video capture
- Allure reporting
