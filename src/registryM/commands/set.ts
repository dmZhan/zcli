import type { CommandModule } from 'yargs'

const set: CommandModule<
  {},
  {
    attr: string
    value: string
    name: string
  }
> = {
  command: 'set <name>',
  describe: 'Set a custom registry attribute',
  builder(yargs) {
    return yargs
      .positional('name', {
        type: 'string',
        description: '',
        demandOption: true,
      })
      .options({
        attr: {
          alias: 'a',
          requiresArg: true,
          describe: 'Set a custom registry attribute',
          default: '',
        },
        value: {
          alias: 'v',
          requiresArg: true,
          default: '',
          describe: 'Set a custom registry value',
        },
      })
  },
  handler: ({ attr, value, name }) => {
    console.error(attr, value, name, 'set')
  },
}

export default set
