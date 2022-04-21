// Packages
import * as fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";

// Components
import App from "./App";

// Styles
import {
  colors,
  fonts,
  getCssText,
  globalStylesObject,
} from "./lib/theme";

const globalStylesArray = Object.keys(globalStylesObject).map((style) => ({
  key: style,
  values: globalStylesObject[style],
}));

let globalStylesString = globalStylesArray.reduce((acc, curr) => {
  const { key, values } = curr;

  let styleString = Object.entries(values)
    .map(([k, v]) => {
      k = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      return `${k}:${v}`;
    })
    .join(";");

  return acc + `${key} { ${styleString}; }`;
}, "");

const parseStyleString = (object: object) => {
  Object.keys(object).forEach((item) => {
    const regex = new RegExp("\\$" + item, "g");

    globalStylesString = globalStylesString.replace(
      regex,
      String(object[item])
    );
  });
};

[colors, fonts].forEach((property) => parseStyleString(property));

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
  const STITCHES_TAG = "{{ STITCHES }}";
  const template = (await getFile("../template.html")) as string;
  const content = ReactDOMServer.renderToStaticMarkup(<App setComments />);

  let styles = (await getFile("../src/index.css")) as string;
  styles = styles.concat(globalStylesString);

  let html = template
    .replace(CONTENT_TAG, content)
    .replace(STYLE_TAG, styles)
    .replace(STITCHES_TAG, getCssText())
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'");

  const outputFile = `./output.html`;

  [
    { name: "colors", object: colors },
    { name: "fonts", object: fonts },
  ].forEach(({ name, object }) => {
    Object.keys(object).forEach((item) => {
      const regexOne = new RegExp(`var\\(--${name}-${item}\\)`, "g");
      const regexTwo = new RegExp(`\\$${item}`, "g");
      html = html.replace(regexOne, object[item]);
      html = html.replace(regexTwo, object[item]);
    });
  });

  fs.writeFileSync(outputFile, html);
};

render();
