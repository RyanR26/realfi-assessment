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

A small application which pulls data from a file and displays it in a visual format. All data is fetched on the server to prevent uneeded
api call from the client. The data is then processed and formatted and passed to the context provider for storage and access from the client
across all routes. A few minimal design charts were built from scratch using only generated html and no SVG or canvas elements. They are used
to display the data in a easy to visualise fashion. 

