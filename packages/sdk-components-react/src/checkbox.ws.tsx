import { CheckboxCheckedIcon } from "@webstudio-is/icons/svg";
import {
  type WsComponentMeta,
  type WsComponentPropsMeta,
  type PresetStyle,
  defaultStates,
} from "@webstudio-is/react-sdk";
import { input } from "@webstudio-is/react-sdk/css-normalize";
import type { defaultTag } from "./checkbox";
import { props } from "./__generated__/checkbox.props";

const presetStyle = {
  input: [
    ...input,
    {
      property: "marginRight",
      value: { type: "unit", unit: "em", value: 0.5 },
    },
  ],
} satisfies PresetStyle<typeof defaultTag>;

export const meta: WsComponentMeta = {
  category: "forms",
  invalidAncestors: ["Button"],
  type: "control",
  label: "Checkbox",
  icon: CheckboxCheckedIcon,
  presetStyle,
  order: 6,
  states: [
    ...defaultStates,
    { selector: ":checked", label: "Checked" },
    { selector: ":required", label: "Required" },
    { selector: ":optional", label: "Optional" },
    { selector: ":disabled", label: "Disabled" },
    { selector: ":enabled", label: "Enabled" },
    { selector: ":read-only", label: "Read Only" },
    { selector: ":read-write", label: "Read Write" },
  ],
  template: [
    {
      type: "instance",
      component: "Label",
      label: "Checkbox Field",
      children: [
        { type: "instance", component: "Checkbox", children: [] },
        {
          type: "instance",
          component: "Text",
          label: "Checkbox Label",
          props: [{ type: "string", name: "tag", value: "span" }],
          children: [{ type: "text", value: "Checkbox" }],
        },
      ],
    },
  ],
};

export const propsMeta: WsComponentPropsMeta = {
  props,
  initialProps: ["id", "name"],
};
