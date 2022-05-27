// Packages
import * as fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";

// Components
import App from "./App";

const getFile = (relativePath: string) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, relativePath);

    return fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    });
  });
};

const render = async () => {
  const CONTENT_TAG = "{{ CONTENT }}";
  const STYLE_TAG = "{{ STYLE }}";
  const template = (await getFile("../template.html")) as string;
  const content = ReactDOMServer.renderToStaticMarkup(<App setComments />);

  let styles = (await getFile("../src/index.css")) as string;

  let html = template
    .replace(CONTENT_TAG, content)
    .replace(STYLE_TAG, styles)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'");

  const outputFile = `./output.html`;

  fs.writeFileSync(outputFile, html);
};

render();
