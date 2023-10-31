import fs from 'node:fs'
import { parse, stringify } from 'ini'
import chalk from 'chalk'
import process from './process'

import { NPMRC, NRMRC, REGISTRIES, REGISTRY } from './constants'

export async function readFile(file: string): Promise<ReturnType<typeof parse>> {
  return new Promise((resolve) => {
    if (!fs.existsSync(file)) {
      resolve({})
    }
    else {
      try {
        const content = parse(fs.readFileSync(file, 'utf-8'))
        resolve(content)
      }
      catch (error: any) {
        exit(error)
      }
    }
  })
}

export async function writeFile(path: string, content: any): Promise<void> {
  return new Promise((resolve) => {
    try {
      fs.writeFileSync(path, stringify(content))
      resolve()
    }
    catch (error: any) {
      exit(error)
    }
  })
}

function padding(message = '', before = 1, after = 1) {
  return new Array(before).fill(' ').join('') + message + new Array(after).fill(' ').join('')
}

export function printSuccess(message: string) {
  console.error(`${chalk.bgGreenBright(padding('SUCCESS'))} ${message}`)
}

export function printError(error: string | Error) {
  console.error(`${chalk.bgRed(padding('ERROR'))} ${chalk.red(error)}`)
}

export function printMessages(messages: string[]) {
  for (const message of messages)
    console.error(message)
}

export function geneDashLine(message: string, length: number) {
  const finalMessage = new Array(Math.max(2, length - message.length + 2)).join('-')
  return padding(chalk.dim(finalMessage))
}

export function isLowerCaseEqual(str1: string, str2: string) {
  if (str1 && str2)
    return str1.toLowerCase() === str2.toLowerCase()

  else
    return !str1 && !str2
}

export async function getCurrentRegistry() {
  const npmrc = await readFile(NPMRC)
  return npmrc[REGISTRY]
}

export async function getRegistries() {
  const customRegistries = await readFile(NRMRC)
  return Object.assign({}, REGISTRIES, customRegistries)
}

export async function isRegistryNotFound(name: string, printErr = true) {
  const registries = await getRegistries()
  if (!Object.keys(registries).includes(name)) {
    printErr && printError(`The registry '${name}' is not found.`)
    return true
  }
  return false
}

export async function isInternalRegistry(name: string, handle: string) {
  if (Object.keys(REGISTRIES).includes(name)) {
    handle && printError(`You cannot ${handle} the nrm internal registry.`)
    return true
  }
  return false
}

export function exit(error?: Error | string | null) {
  error && printError(error)
  process.exit(1)
}
