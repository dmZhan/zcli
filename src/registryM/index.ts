import type { CommandModule } from 'yargs'

import add from './commands/add'
import current from './commands/current'
import del2 from './commands/del-scope'
import del from './commands/del'
import home from './commands/home'
import login from './commands/login'
import ls from './commands/ls'
import rename from './commands/rename'
import set from './commands/set'
import set2 from './commands/set-hosted-repo'
import set3 from './commands/set-scope'
import test from './commands/test'
import use from './commands/use'

const rsym: CommandModule = {
  command: 'rsym <command>',
  describe: 'NPM registry manager can help you easy and fast switch between different npm registries, now include: cnpm, taobao, nj(nodejitsu), edunpm',
  builder: yargs =>
    yargs
      .command([
        add,
        current,
        del2,
        del,
        home,
        login,
        ls,
        rename,
        set,
        set2,
        set3,
        test,
        use,
      ] as any),
  handler: (args) => {
    console.error(args)
    throw new Error('You must specify a valid subcommand')
  },
}
export default rsym
