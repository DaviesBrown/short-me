# Link Shortener Web App - A Journey in Web Development

![Link Shortener](frontend/static/1.jpg)

## Introduction

Welcome to the Link Shortener web app! This project is more than just a web application; it's a reflection of the journey, challenges, and dedication of a passionate team. We've created this tool to simplify the process of sharing long URLs, making them more manageable and user-friendly.

- **Deployed Site**: [Link Shortener](https://short.daviesbrown.tech)
- **Final Project Blog Article**: [Creating a Link Shortener Web App](https://short.daviesbrown.tech/blog-link)

### Authors

- Nwosu David - [LinkedIn](https://linkedin.com/in/nwosu-david)

## Installation

To run the Link Shortener web app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DaviesBrown/short-me.git`
2. Navigate to the project directory: `cd short-me/frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`  

> Before starting the frontend dev server make sure to create all the Pocketbase collections by importing the `backend/pb_schema.json` in Pocketbase `http://127.0.0.1:8090/_/#/settings/import-collections`

## Tools Used

Svelte Kit - https://kit.svelte.dev/  
PocketBase - https://pocketbase.io/  
MailHog - https://github.com/mailhog/MailHog     
PicoCSS - https://picocss.com/  

## Usage

Once the application is up and running, you can access it in your web browser. Here's how to use it:

1. Navigate to the home page.
2. Input your long URL in the provided field.
3. Optionally, create a custom alias for your link.
4. Click the "Shorten" button to generate a shortened URL.
5. Copy and share the shortened link as needed.

## Contributing

We welcome contributions from the community to make the Link Shortener web app even better. If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your feature'`
4. Push your changes to your fork: `git push origin feature/your-feature-name`
5. Create a pull request on the main repository.

## Related Projects

If you're interested in web development and similar projects, check out these related repositories:

- [Zero Width Shortener (ZWS) ](https://github.com/zws-im/zws)


## Technical Details and Our Story

### The Journey

Our journey began with a simple idea: to make sharing links easier. We wanted to create a tool that not only shortened URLs but also provided valuable insights through real-time analytics on your top links. The path was not always smooth, but the challenges we faced made us better engineers.

### Technical Challenges

One of the most challenging technical aspects was implementing real-time analytics. We aimed to give users insights into their link performance. We explored technologies like WebSockets for real-time updates, but integrating them seamlessly was complex. I had to switch it out unfortunately. Also using a new library, svelte gave me little issues.

### Non-Technical Hurdles

Beyond technical challenges, time management emerged as a critical non-technical obstacle. Balancing coding, testing, and project documentation was demanding. Effective project management and time allocation became essential skills in our journey.

### The Human Element

Behind the code and challenges, there's a human story. I poured my passion, time, and dedication into this project. I learned, adapted, and persevered. While this web app may not be the most technically impressive, it embodies our growth as engineers and our commitment to creating valuable tools.

We invite you to explore the Link Shortener web app, share your feedback, and join us in making the web a more user-friendly place. Thank you for being a part of our journey!

