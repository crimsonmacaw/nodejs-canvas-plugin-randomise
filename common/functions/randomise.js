export const randomise = () => ({
  name: 'randomise',
  type: 'number',
  help: 'Output a randomised number based on tolerances',
  context: {
    types: ['number'],
  },
  args: {
    inner: {
      types: ['number'],
      aliases: ['i', 'in'],
      required: false,
      help: 'The inner tolerance, the percentage away from the original value',
    },

    outer: {
      types: ['number'],
      aliases: ['o', 'out'],
      required: false,
      help: 'The outer tolerance, the percentage within the original value'
    }
  },
  fn: (context, args) => {
    if (isNaN(context)) {
      return 0;
    }

    let inner_variance = args.inner == undefined || isNaN(args.inner) ? 0.25 : Math.min(0.4, Math.max(0, args.inner));
    let outer_variance = args.outer == undefined || isNaN(args.outer) ? 0.50 : Math.min(0.5, Math.max(0, args.outer));

    // generate a random number outside the inner_variance, but within the outer_variance

    let inner_min = context/2 - (context * inner_variance);
    let inner_max = context/2 + (context * inner_variance);

    let outer_min = context/2 - (context * outer_variance);
    let outer_max = context/2 + (context * outer_variance);

    // random select if will be above or below original value
    let above = Math.random() > 0.5;
    if (above) {
      return inner_max + (Math.random() * (outer_max - inner_max))
    }

    return outer_min + (Math.random() * (inner_min - outer_min));
  },
});
