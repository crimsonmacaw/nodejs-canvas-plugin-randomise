// This file is used to load client-side plugin assets. Here all the public and common
// functions are being registered in the browser runtime.

// load the functions registry
import { functionsRegistry } from 'plugins/canvas/lib/functions_registry';

// load local functions
import { commonFunctions } from '../../public/functions/common';
commonFunctions.forEach(fnDef => functionsRegistry.register(fnDef));
