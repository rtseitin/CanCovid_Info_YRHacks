# 📈 CanCovid Info
CanCovid Info is a COVID-19 statistics viewing website developed using React. It had a peak monthly user base of 250 visitors, this website allows users to easily access and view up-to-date COVID-19 statistics for Canada.

## 💻 Stack
- React
- JavaScript
- HTML
- CSS

## 🔥 Features
- Single page React website with a visually appealing and functional design created with Figma
- Fetches data from a publicly available REST API and presents it in a more accessible format for users
- Provides links to information about COVID-19 for all Canadian provinces and territories

## 🎥 Demo
You can see a demo of CanCovid Info at [https://cancovid.netlify.app](https://cancovid.netlify.app).

You can also watch a pitch for the project at [https://www.youtube.com/watch?v=tHsaHK2LRs0](https://www.youtube.com/watch?v=tHsaHK2LRs0).


## 🚀 Getting Started

To get started with the web app, you will need to clone the repository and install the dependencies using npm:

```bash
git clone https://github.com/rtseitin/CanCovid_Info_YRHacks.git
cd CanCovid_Info_YRHacks
npm install
```

To start the development server and run the app in development mode, you can use the following command:

```bash
npm start
```

This will start the development server and open the app in your default browser. Any changes you make to the code will be automatically reflected in the browser.

To build the app for production, you can use the following command:

```bash
npm run build
```

This will create a `build/` directory with the compiled production version of the app. You can then serve the app using a static file server, such as [serve](https://www.npmjs.com/package/serve) like in this example, or a solution like [NGINX](https://www.nginx.com/):

```bash
npm install -g serve
serve -s build
```
