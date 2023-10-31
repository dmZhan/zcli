import type { CommandModule } from 'yargs'

const setHostedRepo: CommandModule<
  {},
  {
    name: string
    repo: string
  }
> = {
  command: 'set-hosted-repo <name> <repo>',
  describe: 'Set hosted npm repository for a custom registry to publish package',
  builder(yargs) {
    return yargs
      .positional('name', {
        type: 'string',
        demandOption: true,
        description: '',
      })
      .positional('repo', {
        type: 'string',
        demandOption: true,
        description: '',
      })
  },
  handler: ({ name, repo }) => {
    console.error(name, repo, 'set-hosted-repo')
  },
}

export default setHostedRepo
