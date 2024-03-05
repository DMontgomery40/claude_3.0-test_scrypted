PROMPT:
```
#Your Task
write a plugin for scrypted.app . have it integrate with shelly , which has a well known open source api
#Goals
to have a plugin ready to go that includes package.json, config.json, etc, all the jsons.
to have a plugin written in typesecript that aligns with the scrypted docs
#structure
##/.shelly.scrypted/
##launch.json
##package.json
##tasks.json
##tsconfig.json
##/.vscode/
###config.json
##/.src/
###ShellyDeviceProvider.ts
###Main.ts
```
RESPONSE
```
Here's a sample plugin for Scrypted that integrates with Shelly devices using their open-source API. The plugin is written in TypeScript and follows the Scrypted documentation.

Copy code
/.shelly.scrypted/
  ├── launch.json
  ├── package.json
  ├── tasks.json
  ├── tsconfig.json
  ├── .vscode/
  │   └── config.json
  └── .src/
      ├── ShellyDeviceProvider.ts
      └── Main.ts
Here's the content of each file:
```
