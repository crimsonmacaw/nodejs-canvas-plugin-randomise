// This file is used to load client-side plugin assets. Here all the public and common
// functions are being registered in the browser runtime.

// load the functions registry
import { functionsRegistry } from 'plugins/canvas/lib/functions_registry';

// Additional registries available, not used in this boilerplate
// import { typesRegistry } from 'plugins/canvas/lib/types_registry';
// import { elementsRegistry } from 'plugins/canvas/lib/elements_registry';
// import { renderFunctionsRegistry } from 'plugins/canvas/lib/render_functions_registry';

// load local functions
import { clientFunctions } from '../../public/functions';
import { commonFunctions } from '../../common/functions';

// register client and common functions in the client runtime
clientFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
commonFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
