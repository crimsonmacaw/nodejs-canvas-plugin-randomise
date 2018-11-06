# canvas-plugin-formatdatetz

Plugin for canvas to add a formatdatetz function

# Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start` : Start kibana and have it include this plugin
  - `npm start -- --config kibana.yml` : You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`
  - `npm run build` : Build a distributable archive
  - `npm run test:browser` : Run the browser tests in a real web browser
  - `npm run test:server` : Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.

# Usage

## formatdatetz

* **Function**: formatdatetz
* **Accepts**: number
* **Returns**: string

Output a ms since epoch number as a formatted string according to a given timezone

Arguments

|Name|Aliases|Types|Default|Description|
|-|-|-|-|
|Unnamed*||string||MomentJS Format with which to bucket (See https://momentjs.com/docs/#/displaying/)|
|timezone||string||The timezone in which to display the formatted date|
