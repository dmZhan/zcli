import path from 'node:path'
import process from 'node:process'

export const HOME = 'home'
export const AUTH = '_auth'
export const EMAIL = 'email'
export const REGISTRY = 'registry'
export const REPOSITORY = 'repository'
export const ALWAYS_AUTH = 'always-auth'
export const REGISTRY_ATTRS = [REGISTRY, HOME, AUTH, ALWAYS_AUTH]
export const NRMRC = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']!, '.nrmrc')
export const NPMRC = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']!, '.npmrc')

export { default as REGISTRIES } from '../../../registries.json'
