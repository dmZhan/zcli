import type { CommandModule } from 'yargs'

const setScope: CommandModule<
  {},
  {
    scopeName: string
    url: string
  }
> = {
  command: 'set-scope <scopeName> <url>',
  describe: 'Associating a scope with a registry',
  builder: yargs =>
    yargs
      .positional('scopeName', {
        type: 'string',
        demandOption: true,
        description: '',
      })
      .positional('url', {
        type: 'string',
        demandOption: true,
        description: '',
      }),
  handler: ({ scopeName, url }) => {
    console.error(scopeName, url, 'set-scope')
  },
}

export default setScope
