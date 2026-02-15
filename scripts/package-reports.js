#!/usr/bin/env node

/**
 * Script to package test reports for download
 * Creates zip files of HTML and Allure reports
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPORTS_DIR = 'downloadable-reports';
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

console.log('📦 Packaging Test Reports for Download...\n');

// Function to create zip file
function createZip(sourcePath, outputName) {
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  ${sourcePath} not found, skipping...`);
    return null;
  }

  const zipFile = path.join(REPORTS_DIR, `${outputName}-${TIMESTAMP}.zip`);
  
  try {
    // Use tar to create archive (available on most systems)
    execSync(`cd ${path.dirname(sourcePath)} && tar -czf "${path.resolve(zipFile)}" "${path.basename(sourcePath)}"`, {
      stdio: 'inherit'
    });
    
    const stats = fs.statSync(zipFile);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`✅ Created: ${zipFile} (${sizeInMB} MB)`);
    return zipFile;
  } catch (error) {
    console.error(`❌ Failed to create ${outputName} archive:`, error.message);
    return null;
  }
}

// Package different report types
const reports = [];

// 1. Playwright HTML Report
const htmlReport = createZip('playwright-report', 'playwright-html-report');
if (htmlReport) reports.push(htmlReport);

// 2. Allure Report (if exists)
if (fs.existsSync('allure-report')) {
  const allureReport = createZip('allure-report', 'allure-html-report');
  if (allureReport) reports.push(allureReport);
}

// 3. Test Results JSON
if (fs.existsSync('test-results/test-results.json')) {
  const jsonReportPath = path.join(REPORTS_DIR, `test-results-${TIMESTAMP}.json`);
  fs.copyFileSync('test-results/test-results.json', jsonReportPath);
  const stats = fs.statSync(jsonReportPath);
  const sizeInKB = (stats.size / 1024).toFixed(2);
  console.log(`✅ Created: ${jsonReportPath} (${sizeInKB} KB)`);
  reports.push(jsonReportPath);
}

// 4. Create a summary file
const summaryPath = path.join(REPORTS_DIR, `report-summary-${TIMESTAMP}.txt`);
const summaryContent = `
Test Report Generation Summary
==============================
Generated: ${new Date().toLocaleString()}

Available Reports:
${reports.map((r, i) => `${i + 1}. ${path.basename(r)}`).join('\n')}

How to Access Reports:
----------------------

1. Playwright HTML Report:
   - Extract: playwright-html-report-*.zip
   - Open: index.html in a web browser
   - Or run: npm run test:report

2. Allure HTML Report (if available):
   - Extract: allure-html-report-*.zip
   - Open: index.html in a web browser
   - Or run: npm run allure:open

3. JSON Report:
   - File: test-results-*.json
   - Can be parsed programmatically or viewed in text editor

4. View Online:
   - Run: npm run reports:serve
   - Opens browser to http://localhost:9323

Download Location: ${path.resolve(REPORTS_DIR)}
`;

fs.writeFileSync(summaryPath, summaryContent);
console.log(`✅ Created: ${summaryPath}\n`);

// Create an index file for easy access
const indexPath = path.join(REPORTS_DIR, 'README.txt');
const indexContent = `
Test Reports Download Directory
================================

This directory contains packaged test reports ready for download.

Files Generated: ${reports.length + 1}
${reports.map((r, i) => `${i + 1}. ${path.basename(r)}`).join('\n')}
${reports.length + 1}. ${path.basename(summaryPath)}

To view reports:
1. Extract the .zip files
2. Open index.html files in your browser
3. Or use npm scripts: npm run test:report, npm run allure:open

Generated: ${new Date().toLocaleString()}
`;

fs.writeFileSync(indexPath, indexContent);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✨ Report Packaging Complete!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📁 Reports Location: ${path.resolve(REPORTS_DIR)}`);
console.log(`📊 Total Files: ${reports.length + 2}`);
console.log('\n💡 Quick Actions:');
console.log('   • View HTML Report: npm run test:report');
console.log('   • Serve Reports: npm run reports:serve');
console.log(`   • Download from: ${path.resolve(REPORTS_DIR)}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
