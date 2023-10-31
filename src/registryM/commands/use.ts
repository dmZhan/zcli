import type { CommandModule } from 'yargs'
import { onUse } from '../nrm/actions'

const use: CommandModule<
  {},
  {
    name: string
  }
> = {
  command: 'use <name>',
  describe: 'Change current registry',
  builder: yargs =>
    yargs
      .positional('name', {
        description: 'Choose one registry to use',
        demandOption: true,
        default: 'npm',
      }),
  handler: async ({ name }) => {
    await onUse(name)
  },
}

export default use
