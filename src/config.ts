import { hideBin } from 'yargs/helpers'
import parser from 'yargs-parser'
import type { Arguments } from 'yargs-parser'

export async function findConfig(argv: string[] = hideBin(process.argv)) {
  const preArgs: Arguments = parser(argv)
  return preArgs
}
