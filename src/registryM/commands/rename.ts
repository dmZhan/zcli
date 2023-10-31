import type { CommandModule } from 'yargs'

const rename: CommandModule<
  unknown,
  {
    name: string
    newName: string
  }
> = {
  command: 'rename <name> <newName>',
  describe: 'Change custom registry name',
  builder: yargs =>
    yargs
      .positional('name', {
        type: 'string',
        demandOption: true,
        description: '',
      })
      .positional('newName', {
        type: 'string',
        demandOption: true,
        description: '',
      }),
  handler: ({ name, newName }) => {
    console.error(name, newName, 'rename')
  },
}

export default rename
