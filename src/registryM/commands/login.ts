import type { CommandModule } from 'yargs'

const login: CommandModule<
  {},
  {
    'always-auth': boolean
    username: string
    password: string
    email: string
    base64?: string
    name: string
  }
> = {
  command: 'login <name> [base64]',
  describe: 'Set authorize information for a custom registry with a base64 encoded string or username and password',
  builder: yargs =>
    yargs
      .positional('name', {
        type: 'string',
        demandOption: true,
        description: '',
      })
      .positional('base64', {
        type: 'string',
        describe: '',
      })
      .option('always-auth', {
        alias: 'a',
        description: 'Set is always auth',
        type: 'boolean',
        default: false,
      })
      .option('username', {
        alias: 'u',
        type: 'string',
        default: '',
        description: 'Your user name for this registry',
      })
      .option('password', {
        alias: 'p',
        type: 'string',
        default: '',
        description: 'Your password for this registry',
      })
      .option('email', {
        alias: 'e',
        type: 'string',
        default: '',
        description: 'Your email for this registry',
      }),
  handler: ({ alwaysAuth, username, password, email, base64, name }) => {
    console.error(alwaysAuth, username, password, email, base64, name)
  },
}

export default login
