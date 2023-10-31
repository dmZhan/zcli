import type { CommandModule } from 'yargs'

const ls: CommandModule = {
  command: 'ls',
  describe: 'List all the registries',
  handler: () => {
    console.error('list all')
  },
}

export default ls
