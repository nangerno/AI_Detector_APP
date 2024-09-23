import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import CircleProgressBar from "./pages/components/circleProgressBar";
import CopyleaksWrapper from "./pages/components/copyleaksWrapper";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mx1g1ScwYpCv9wPjB3FxMt",
      token:
        "9xHqnJXZBYSa94pYR91R4AMdQCI5fRweaLcJDpytqX0C64zfD21w3gu9JsN8FdNf7SVyVcJMDo9A",
    },
  ],
  preview: false,
});

PLASMIC.registerComponent(CircleProgressBar, {
  name: "CircleProgressBar",
  props: {
    percentage: "number",
    size: "number",
    position: {
      type: "choice",
      options: ["relative", "absolute", "fixed", "static"],
      defaultValue: "relative",
    },
    className: "string",
  },
  importPath: "./pages/components/circleProgressBar",
});
PLASMIC.registerComponent(CopyleaksWrapper, {
  name: "CopyleaksWrapper",
  props: {},
  importPath: "./pages/components/copyleaksWrapper",
});
