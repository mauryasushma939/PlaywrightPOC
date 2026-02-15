# PlaywrightPOC
UI Automation using Playwright

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mauryasushma939/PlaywrightPOC.git
cd PlaywrightPOC
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium
```

## 🧪 Running Tests

### Run all tests (headless mode):
```bash
npm test
```

### Run tests with browser UI visible:
```bash
npm run test:headed
```

### Run tests in interactive UI mode:
```bash
npm run test:ui
```

### Run tests in debug mode:
```bash
npm run test:debug
```

### View test report:
```bash
npm run test:report
```

### Generate and view Allure report:
```bash
npm run allure:generate
npm run allure:open
```

## 📁 Project Structure

```
PlaywrightPOC/
├── test/
│   ├── base/           # Base utilities and actions
│   ├── constants/      # Test constants and timeouts
│   ├── pages/          # Page Object Model files
│   ├── tests/          # Test specification files
│   └── utils/          # Utility functions and environment config
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## 🧪 Test Suites

1. **UserLogin.spec.ts** - User authentication tests
2. **OrderProducts.spec.ts** - Product ordering workflow tests
3. **OperationWebElements.spec.ts** - Web element operations tests

## 📊 Test Reports

After running tests, you can find:
- **HTML Report**: `playwright-report/index.html`
- **Test Results**: `test-results/` directory
- **Allure Results**: `allure-results/` directory

## 🔧 Configuration

Test configuration can be modified in `playwright.config.ts`:
- Browser settings
- Timeout values
- Retry logic
- Reporter configuration
- Video and screenshot settings

## 📝 Writing Tests

This project uses:
- **Page Object Model (POM)** - For better code organization and reusability
- **TypeScript** - For type safety and better IDE support
- **Playwright Test Runner** - For test execution and reporting

For more details, see [TEST_EXECUTION_SUMMARY.md](TEST_EXECUTION_SUMMARY.md)
