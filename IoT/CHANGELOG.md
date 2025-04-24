# Changelog

## [1.0.0] - 2025-04-24

### Added
- Created `sendData.js` to simulate and send IoT data to an API
- Introduced Jest unit tests for temperature and humidity simulation
- GitHub Actions pipeline for CI

### Changed
- Refactored sensor simulation logic for cleaner output

### Fixed
- Corrected test import path in `sendDevice.test.js`
- Resolved Jest async timeout with `--detectOpenHandles`

### Removed
- Removed old dummy test file
