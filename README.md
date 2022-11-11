# tailwindcss-radix-ui

## Install

```sh
npm i tailwindcss-radix-ui
```

Add to your Visual Studio Code settings:

```json
"tailwindCSS.experimental.classRegex": [
  "twix\\([\\w,.\\s]+\"([^\"]*)",
  "twix\\([\\w,.\\s]+'([^']*)",
  "twix\\([\\w,.\\s]+`([^`]*)",
  ["cx\\(([^)]*)\\)", "'([^']*)'"],
  ["cx\\(([^)]*)\\)", "`([^`]*)`"],
  ["cx\\(([^)]*)\\)", "\"([^\"]*)\""]
]
```

## Usage

```tsx
// components/checkbox.tsx
import { twix } from "tailwindcss-radix-ui";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Root = twix(
  Checkbox.Root,
  "bg-white w-8 h-8 flex items-center justify-center"
);
export const Indicator = twix(Checkbox.Root, "text-indigo-500");

// app.tsx
import * as Checkbox from "./components/checkbox.tsx";
import { CheckIcon } from "@radix-ui/react-icons";

export default () => {
  return (
    <div>
      <Checkbox.Root>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
};
```
