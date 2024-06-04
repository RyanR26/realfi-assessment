This is a [Next.js] built to show data visualisations.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Running unit tests:

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Summary

A small application which fetches JSON data from a file and displays it in a visual format. All data is fetched on the server to prevent unnecessary http requests from the client. The data is then processed, formatted and passed to the React context provider for storage and to allow access from the client components across all routes. A few minimally design chart/graph components were built from scratch using only generated html to display data in and easy to visualise fashion (no SVG or canvas elements).

