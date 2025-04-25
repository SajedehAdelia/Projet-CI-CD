# EnvCast Project

## Overview

The `EnvCast` project is an IoT sensor simulator and sender application with automated release processes, including versioning, changelog generation, and continuous integration (CI) setup. This project utilizes a set of tools to automate the versioning and release process, providing a seamless workflow for deploying updates to the application.

## Branches and Tags

- **`feat/2/envcast`**: This branch contains the development work for the features and tools related to the `EnvCast` project. It has an associated tag (`feat/2/envcast`) that can be used to mark the specific release.
- **`main`**: The `main` branch represents the stable, production-ready version of the project. It is different from `feat/2/envcast` as it doesn't include the specific developments and tools used for versioning, changelog generation, and CI/CD integration.

You can see the tag `feat/2/envcast` in the `feat/2/envcast` branch to mark the completion of the associated features and improvements in that branch.

## Tools Used

### 1. **Semantic Versioning (SemVer)**

Semantic Versioning is applied to track the version of the application. This tool helps in managing major, minor, and patch version increments based on the changes made to the project. With `semantic-release`, the version is bumped automatically based on the commit messages.

### 2. **Release-it**

`Release-it` is used to automate the process of creating Git tags and publishing releases. It simplifies the versioning and changelog generation by automatically bumping versions and pushing the corresponding tags.

### 3. **Standard Version**

`Standard Version` is another tool used for automating version bumping and changelog generation. It integrates with the Git workflow to automatically bump versions based on the commit messages and update the changelog accordingly.

### Integration of Tools

In the `EnvCast` project, these tools are integrated into the release process to ensure that every release follows a consistent versioning scheme and that changelog updates are automatically generated. Additionally, the tools provide a streamlined CI/CD workflow.

## Added Features

### 1. **Tagging and Versioning**

In the `feat/2/envcast` branch, we implemented a release workflow that automatically tags the project with the appropriate version based on the changes made. The tag follows the semantic versioning format, ensuring that version numbers reflect the nature of the changes:

- **Major version**: Introduced breaking changes.
- **Minor version**: Introduced new features in a backward-compatible manner.
- **Patch version**: Made backward-compatible bug fixes.

### 2. **Changelog Generation**

A manual changelog was initially created from the last 5 commits. Going forward, the changelog will be automatically updated with each release, based on the commit messages, using the tools `release-it` and `standard-version`.

### 3. **Automating the Release Process**

With the integration of `semantic-release`, `release-it`, and `standard-version`, the release process has been automated to:

- Bump the version number based on the commit history.
- Automatically generate a changelog file.
- Create Git tags for each release.
- Push the tags and changes to the repository.

### 4. **Testing the Simulator**

We also implemented tests to validate the simulated sensor data (temperature, humidity, and CO2). These tests ensure that the data returned by the simulator functions is within expected ranges and is of the correct type (`number`). The test cases are as follows:

- **Temperature**: Between 15 and 30 degrees Celsius.
- **Humidity**: Between 30 and 80 percent.
- **CO2**: Between 350 and 1200 parts per million.

### 5. **Manual and Automated Testing**

We set up tests using `Jest` to ensure that the simulator functions are returning valid data. Tests are executed as part of the CI process to guarantee that new changes don't break existing functionality.

## Folder Structure

```
envcast/
├── sensors/
│   └── simulator.js         # Simulates temperature, humidity, and CO2 data
├── .github/workflows/ci.yml # GitHub Actions CI workflow
├── .gitlab-ci.yml           # GitLab CI pipeline
├── Jenkinsfile              # Jenkins CI pipeline
├── CHANGELOG.md             # Changelog (auto-updated in future releases)
├── index.js                 # Entry point for the simulator
├── package.json             # Project metadata and scripts
└── README.md                # Project overview and setup instructions
```

## Setup Instructions

### Install Dependencies

To set up the project, install the necessary dependencies:

```bash
npm install
```

### Run the Simulator

To run the simulator:

```bash
node index.js
```

### Running Tests

To run the tests:

```bash
npm test
```

## Next Steps

- Add more unit tests and test coverage reporting.
- Integrate the changelog auto-generation process fully.
- Continue exploring the automation of version tagging through the CLI and GitHub Actions.

## Conclusion

In this project, we have automated the release process, introduced testing for the IoT simulator, and integrated CI/CD workflows using tools like `semantic-release`, `release-it`, and `standard-version`. The work done in the `feat/2/envcast` branch ensures that the application follows a consistent versioning strategy and that releases are created with minimal manual intervention.

