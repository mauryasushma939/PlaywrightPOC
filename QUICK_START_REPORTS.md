# 🚀 Quick Start - Test Reports

## Run Tests & Get Reports in 2 Steps

### Step 1: Run Tests
```bash
npm test
```
**Output**: All 4 tests pass in ~3-4 seconds ✅

### Step 2: Package Reports
```bash
npm run reports:package
```
**Output**: Creates downloadable report files in `downloadable-reports/`

## 📥 What You Get

After running the commands above, you'll find in `downloadable-reports/`:

```
downloadable-reports/
├── playwright-html-report-[timestamp].zip    (180 KB)
├── allure-html-report-[timestamp].zip        (998 KB)
├── test-results-[timestamp].json             (11 KB)
├── report-summary-[timestamp].txt            (Summary)
└── README.txt                                (Instructions)
```

## 🎯 Quick Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:report` | View HTML report instantly |
| `npm run reports:package` | Create downloadable reports |
| `npm run reports:serve` | Serve reports on http://localhost:9323 |

## 📊 View Reports

### Option 1: Instant View (Recommended)
```bash
npm run test:report
```
Opens interactive Playwright report in your browser automatically.

### Option 2: Manual View
1. Extract: `downloadable-reports/playwright-html-report-*.zip`
2. Open: `index.html` in any browser

### Option 3: Serve Online
```bash
npm run reports:serve
```
Access at: http://localhost:9323

## 📋 Report Features

### Playwright HTML Report
- ✅ Test execution timeline
- ✅ Screenshots on failure
- ✅ Video recordings
- ✅ Error details with stack traces
- ✅ Filter and search capabilities

### Allure Report
- ✅ Test trends and history
- ✅ Test categories and tags
- ✅ Duration analysis
- ✅ Rich attachments

### JSON Report
- ✅ Structured test data
- ✅ Perfect for CI/CD integration
- ✅ Programmatic access

## 🔄 Full Workflow

```bash
# 1. Run tests
npm test

# 2. Package reports
npm run reports:package

# 3. View reports
npm run test:report

# Done! All reports are ready in downloadable-reports/
```

## 💡 Pro Tips

1. **Share Reports**: Just zip and send the `downloadable-reports/` folder
2. **CI/CD**: Use JSON report for automated processing
3. **Quick Check**: Use `npm run test:report` for instant feedback
4. **Cleanup**: Reports regenerate each time, safe to delete old ones

## 📚 Need More Help?

- Full documentation: [TEST_REPORTS_GUIDE.md](TEST_REPORTS_GUIDE.md)
- Project README: [README.md](README.md)
- Test execution: [TEST_EXECUTION_SUMMARY.md](TEST_EXECUTION_SUMMARY.md)

---

**Ready to start?** Run: `npm test && npm run reports:package` 🎉
