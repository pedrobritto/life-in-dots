import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import globalStyles from "./global.css?inline";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body lang="en" class="bg-slate-100">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
