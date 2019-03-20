import { commonFunctions } from './public/functions/common';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['canvas'],
    name: 'canvas-plugin-randomise',
    uiExports: {
      hacks: [
        // register functions and the like things with canvas
        'plugins/canvas-plugin-formatdatetz/lib/load_plugin.js',
      ],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server) {
      commonFunctions.forEach(fn => server.plugins.canvas.addFunction(fn));
    }
  });
}
