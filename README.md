# PlaywrightPOC
UI Automation using Playwright

## Automated Test Execution

This project includes a GitHub Actions workflow that automatically runs all test cases daily at 8 AM UTC.

### Scheduled Execution
- **Schedule**: Daily at 8:00 AM UTC
- **Workflow**: `.github/workflows/scheduled-tests.yml`
- **Tests Included**: All test specs in the `test/tests/` directory

### Manual Execution
You can also trigger the tests manually:
1. Go to the **Actions** tab in the GitHub repository
2. Select **"Scheduled Daily Tests"** workflow
3. Click **"Run workflow"** button

### Test Results
After each run, test results are automatically uploaded as artifacts:
- **Playwright Test Results**: HTML reports and test results
- **Allure Results**: Allure test report data
- **Retention**: Artifacts are kept for 30 days

### Adjusting the Schedule
To change the execution time, edit the cron expression in `.github/workflows/scheduled-tests.yml`:
```yaml
schedule:
  - cron: '0 8 * * *'  # Runs at 8 AM UTC daily
```

**Note**: GitHub Actions uses UTC timezone. To convert to your local timezone:
- 8 AM UTC = 1:30 PM IST (India Standard Time)
- 8 AM UTC = 12 AM PST (midnight Pacific Standard Time) / 1 AM PDT (Pacific Daylight Time)
- 8 AM UTC = 3 AM EST (Eastern Standard Time) / 4 AM EDT (Eastern Daylight Time)

To schedule for 8 AM IST, use: `cron: '30 2 * * *'` (2:30 AM UTC = 8 AM IST)
