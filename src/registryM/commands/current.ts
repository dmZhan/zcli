import type { CommandModule } from 'yargs'

const current: CommandModule<
  {},
  { 'show-url': boolean }
> = {
  command: 'current',
  describe: 'Show current registry name or URL',
  builder: yargs =>
    yargs
      .option('show-url', {
        alias: 'u',
        type: 'boolean',
        description: 'Show the registry URL instead of the name',
        default: false,
      }),
  handler: ({ showUrl }) => {
    console.error(showUrl, 'showUrl')
  },
}

export default current
