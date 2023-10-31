import type { CommandModule } from 'yargs'

const delScope: CommandModule<
  {},
  { scopeName: string }
> = {
  command: 'del-scope <scopeName>',
  describe: 'Remove a scope',
  builder: yargs =>
    yargs
      .positional('scopeName', {
        describe: '',
        type: 'string',
        demandOption: true,
      }),
  handler: ({ scopeName }) => {
    console.error(scopeName, 'del-scope')
  },
}

export default delScope
