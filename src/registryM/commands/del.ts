import type { CommandModule } from 'yargs'

const del: CommandModule<
  {},
  { name: string }
> = {
  command: 'del <name>',
  describe: 'Delete custom registry',
  builder: yargs =>
    yargs
      .positional('name', {
        type: 'string',
        demandOption: true,
        describe: '',
      }),
  handler: ({ name }) => {
    console.error(name, 'del')
  },
}

export default del
