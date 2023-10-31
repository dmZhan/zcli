import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import packageJson from '../package.json'
import { commands } from './commands'

void yargs(hideBin(process.argv))
  .scriptName('zcli')
  .demandCommand(1, 'Please specify a command')
  .usage('Usage: $0 <command> [options]')
  .version(false)
  .option('version', {
    alias: 'v',
    describe: 'Print ZCLI CLI version',
    type: 'boolean',
    global: false,
  })
  .middleware(({ version }) => {
    if (version) {
      console.error(`${packageJson.name} v${packageJson.version}`)

      process.exit(0)
    }
  }, true)
  .command(commands)
  .showHelpOnFail(false)
  .alias('h', 'help')
  .help()
  .parse()
