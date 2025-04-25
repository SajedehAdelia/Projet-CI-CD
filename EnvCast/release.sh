#!/bin/bash

set -e

TOOL=$1

usage() {
  echo "Usage: ./release.sh [standard-version|release-it|semantic-release]"
  exit 1
}

if [[ -z "$TOOL" ]]; then
  usage
fi

case $TOOL in
  standard-version)
    echo "Running release with standard-version..."
    npx standard-version
    git push --follow-tags origin main
    ;;
  release-it)
    echo "Running release with release-it..."
    npx release-it
    ;;
  semantic-release)
    echo "Running release with semantic-release..."
    npx semantic-release
    ;;
  *)
    echo "Unknown tool: $TOOL"
    usage
    ;;
esac
