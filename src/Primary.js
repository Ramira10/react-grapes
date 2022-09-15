import plugin from "grapesjs-blocks-basic";
import plugin2 from "grapesjs-preset-webpage";
import plugin3 from "grapesjs-plugin-forms";

import {GrapesjsReact} from "grapesjs-react";

export const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      plugin,
      plugin2,
      plugin3
    ]}
  />;
};