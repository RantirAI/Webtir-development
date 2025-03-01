import { RadioCheckedIcon } from "@webstudio-is/icons/svg";
import {
  type WsComponentMeta,
  type WsComponentPropsMeta,
} from "@webstudio-is/react-sdk";

import {
  propsTooltip,
  propsTooltipContent,
  propsTooltipTrigger,
} from "./__generated__/radix-tooltip.props";

// @todo add [data-state] to button and link
export const metaTooltipTrigger: WsComponentMeta = {
  category: "hidden",
  invalidAncestors: [],
  type: "container",
  label: "TooltipTrigger",
  icon: RadioCheckedIcon,
  stylable: false,
};

export const metaTooltipContent: WsComponentMeta = {
  category: "hidden",
  invalidAncestors: [],
  type: "container",
  label: "TooltipContent",
  icon: RadioCheckedIcon,
};

export const metaTooltip: WsComponentMeta = {
  category: "radix",
  invalidAncestors: [],
  type: "container",
  label: "Tooltip",
  icon: RadioCheckedIcon,
  order: 15,
  template: [
    {
      type: "instance",
      component: "Tooltip",
      label: "Tooltip",
      props: [
        {
          name: "isOpen",
          // We don't have support for boolean or undefined, instead of binding on open we bind on a string
          type: "string",
          value: "initial",
          dataSourceRef: {
            type: "variable",
            name: "isOpen",
          },
        },
      ],
      children: [
        {
          type: "instance",
          component: "TooltipTrigger",
          props: [],
          children: [
            {
              type: "instance",
              component: "Button",
              children: [{ type: "text", value: "Button" }],
            },
          ],
        },
        {
          type: "instance",
          component: "TooltipContent",
          label: "Tooltip Content",
          props: [],
          children: [
            {
              type: "instance",
              component: "Box",
              props: [],
              children: [
                {
                  type: "instance",
                  component: "Text",
                  children: [{ type: "text", value: "The text you can edit" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const propsMetaTooltip: WsComponentPropsMeta = {
  props: propsTooltip,
  initialProps: ["isOpen", "delayDuration", "disableHoverableContent"],
};

export const propsMetaTooltipTrigger: WsComponentPropsMeta = {
  props: propsTooltipTrigger,
};

export const propsMetaTooltipContent: WsComponentPropsMeta = {
  props: propsTooltipContent,
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
};
