import type { CommandModule } from 'yargs'

const add: CommandModule<
  {},
  {
    name: string
    url: string
    home?: string
  }
> = {
  command: 'add <name> <url> [home]',
  describe: 'Add custom registry',
  builder: yargs =>
    yargs
      .positional('name', {
        type: 'string',
        description: 'Registry name',
        demandOption: true,
      })
      .positional('url', {
        type: 'string',
        description: 'Registry url',
        demandOption: true,
      })
      .positional('home', {
        type: 'string',
        description: 'Registry home',
      }),
  handler: ({ name, url, home }) => {
    console.error(name, url, home)
  },
}

export default add
