import type { CommandModule } from 'yargs'

const home: CommandModule<
  {},
  { name: string; browser?: string }
> = {
  command: 'home <name> [browser]',
  describe: 'Open the homepage of registry with optional browser',
  builder(yargs) {
    return yargs
      .positional('name', {
        type: 'string',
        describe: '',
        demandOption: true,
      })
      .positional('browser', {
        type: 'string',
        describe: '',
      })
  },
  handler: ({ name, browser }) => {
    console.error(name, browser, 'home')
  },
}

export default home
