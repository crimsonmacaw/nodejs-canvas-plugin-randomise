# canvas-plugin-randomise

Plugin for canvas to add a randomise function

# Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start` : Start kibana and have it include this plugin
  - `npm start -- --config kibana.yml` : You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`
  - `npm run build` : Build a distributable archive
  - `npm run test:browser` : Run the browser tests in a real web browser
  - `npm run test:server` : Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.

# Usage

## randomise

* **Function**: randomise
* **Accepts**: number
* **Returns**: number

Output a randomised number based on tolerances

Arguments

|Name|Aliases|Types|Default|Description|
|-|-|-|-|
|inner|i, in|number|0.25|The inner tolerance, the percentage away from the original value|
|outer|o, out|number|0.5|The inner tolerance, the percentage away from the original value|
