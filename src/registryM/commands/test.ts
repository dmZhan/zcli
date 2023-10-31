import type { CommandModule } from 'yargs'

const test: CommandModule<
  {},
  {
    registry?: string
  }
> = {
  command: 'test [registry]',
  describe: 'Show response time for specific or all registries',
  builder: yargs =>
    yargs
      .positional('registry', {
        type: 'string',
        description: '',
      }),
  handler: ({ registry }) => {
    console.error(registry, 'test')
  },
}

export default test
