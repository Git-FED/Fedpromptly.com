#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const requiredFiles = [
  'package.json',
  'package-lock.json',
  'electron/main.cjs',
  'scripts/run-gradle.mjs',
  'electron-builder.yml',
  '.github/workflows/build.yml',
  'www/index.html',
  'capacitor.config.json',
];

for (const relativePath of requiredFiles) {
  if (!existsSync(join(root, relativePath))) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
}

const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
if (packageJson.main !== 'electron/main.cjs') throw new Error('package main must point to Electron entrypoint');
if (packageJson.scripts?.dist !== 'electron-builder') throw new Error('dist script must use electron-builder');
if (!packageJson.scripts?.['build:apk']?.includes('run-gradle.mjs')) throw new Error('Android build must use cross-platform Gradle launcher');
if (!packageJson.devDependencies?.electron) throw new Error('electron devDependency is missing');
if (!packageJson.devDependencies?.['electron-builder']) throw new Error('electron-builder devDependency is missing');

const workflow = readFileSync(join(root, '.github/workflows/build.yml'), 'utf8');
for (const requiredText of ['npm run dist -- --win', 'npm run dist -- --mac', 'npm run dist -- --linux']) {
  if (!workflow.includes(requiredText)) throw new Error(`Workflow is missing: ${requiredText}`);
}

console.log(`Smoke tests passed (${requiredFiles.length} required files and desktop CI targets verified).`);
