# Test Reports Guide

## 📊 Overview

This project generates comprehensive test reports in multiple formats for easy viewing and download.

## 🚀 Quick Start

### Run All Tests and Generate Reports

```bash
# Run all test cases
npm test

# Package all reports for download
npm run reports:package
```

## 📁 Available Report Formats

### 1. **Playwright HTML Report** (Interactive)
- **Location**: `playwright-report/`
- **Format**: HTML with screenshots, videos, traces
- **View**: `npm run test:report`
- **Download**: `downloadable-reports/playwright-html-report-*.zip`

### 2. **Allure Report** (Detailed)
- **Location**: `allure-report/` (after generation)
- **Format**: Rich HTML with trends and analytics
- **Generate**: `npm run allure:generate` (requires Allure CLI)
- **Download**: `downloadable-reports/allure-html-report-*.zip`

### 3. **JSON Report** (Programmatic)
- **Location**: `test-results/test-results.json`
- **Format**: Structured JSON data
- **Download**: `downloadable-reports/test-results-*.json`

## 🎯 NPM Scripts

### Test Execution
```bash
npm test                # Run all tests (headless)
npm run test:headed     # Run tests with browser UI
npm run test:ui         # Interactive UI mode
npm run test:debug      # Debug mode
```

### Report Viewing
```bash
npm run test:report     # View Playwright HTML report
npm run reports:serve   # Serve reports on http://localhost:9323
npm run allure:open     # Open Allure report (if generated)
```

### Report Generation
```bash
npm run reports:package      # Package all reports for download
npm run allure:generate      # Generate Allure HTML report
npm run reports:generate-all # Generate all report types
```

## 📥 Downloading Reports

After running tests and packaging reports:

1. **Run tests**:
   ```bash
   npm test
   ```

2. **Package reports**:
   ```bash
   npm run reports:package
   ```

3. **Find downloadable reports in**: `downloadable-reports/`

### Download Files Include:
- `playwright-html-report-[timestamp].zip` - Complete Playwright HTML report
- `allure-html-report-[timestamp].zip` - Allure HTML report (if available)
- `test-results-[timestamp].json` - Raw test results data
- `report-summary-[timestamp].txt` - Quick summary
- `README.txt` - Instructions

## 🌐 Viewing Reports Online

### Option 1: Playwright Report Server
```bash
npm run test:report
```
- Automatically opens in browser
- Interactive report with filters
- Screenshots and videos included

### Option 2: HTTP Server
```bash
npm run reports:serve
```
- Serves reports on http://localhost:9323
- All reports accessible through browser

## 📊 Report Features

### Playwright HTML Report
- ✅ Test execution timeline
- ✅ Screenshots on failure
- ✅ Video recordings
- ✅ Trace viewer
- ✅ Error details with stack traces
- ✅ Filtering and search

### Allure Report
- ✅ Test trends over time
- ✅ Test history
- ✅ Categories and tags
- ✅ Attachments (logs, screenshots)
- ✅ Duration analysis
- ✅ Flaky test detection

### JSON Report
- ✅ Structured test data
- ✅ Programmatic access
- ✅ CI/CD integration
- ✅ Custom processing

## 🔧 Configuration

Reports are configured in `playwright.config.ts`:

```typescript
reporter: [
  ['list'],                                                    // Console output
  ['html', { open: 'never', outputFolder: 'playwright-report' }],  // HTML report
  ['json', { outputFile: 'test-results/test-results.json' }],      // JSON report
  ['allure-playwright'],                                            // Allure data
]
```

## 📂 Directory Structure

```
PlaywrightPOC/
├── playwright-report/          # Playwright HTML report
├── allure-report/              # Allure HTML report (after generation)
├── allure-results/             # Allure raw data
├── test-results/               # Test results and JSON
│   └── test-results.json       # Structured test data
├── downloadable-reports/       # Packaged reports for download
│   ├── playwright-html-report-*.zip
│   ├── allure-html-report-*.zip
│   ├── test-results-*.json
│   ├── report-summary-*.txt
│   └── README.txt
└── scripts/
    └── package-reports.js      # Report packaging script
```

## 💡 Tips

1. **CI/CD Integration**: Use JSON report for automated processing
2. **Quick Review**: Use `npm run test:report` for immediate viewing
3. **Sharing**: Package and share `downloadable-reports/*.zip` files
4. **Storage**: Reports are timestamped for version tracking
5. **Cleanup**: Reports are gitignored and can be regenerated anytime

## 🐛 Troubleshooting

### Reports not generating?
- Ensure tests have run: `npm test`
- Check for errors in test output

### Allure report empty?
- Install Allure CLI: Follow [Allure installation guide](https://docs.qameta.io/allure/#_installing_a_commandline)
- Or use the pre-packaged Allure results

### Can't view HTML reports?
- Try: `npm run reports:serve`
- Open: http://localhost:9323

## 📚 Additional Resources

- [Playwright Reporters](https://playwright.dev/docs/test-reporters)
- [Allure Framework](https://docs.qameta.io/allure/)
- [Test Best Practices](./README.md)

## ✨ Summary

This test framework provides:
- ✅ Multiple report formats
- ✅ Easy viewing and downloading
- ✅ Automated packaging
- ✅ CI/CD ready
- ✅ Comprehensive test insights

Run `npm test` followed by `npm run reports:package` to get all reports ready for download!
