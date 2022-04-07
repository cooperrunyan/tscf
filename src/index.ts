#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import * as assets from './asset.js';
import { ensureDirectory } from 'ensure-directory';

const program = new Command('tscf');

program
  .arguments('<type> [name]')
  .option('-l,--log')
  .description('Writes a tsconfig file')
  .action(async (type: Type, name: string, args: Record<string, any>) => {
    try {
      const file = select(type, assets);

      if (args.log) void process.stdout.write(file);

      await ensureDirectory(path.resolve(name));

      const thereIsAFile = fs.existsSync(path.resolve(name ? name : '.', 'tsconfig.json'));

      const dir = path.resolve(name ? name : '.', (thereIsAFile ? 'new' : '') + 'tsconfig.json');

      fs.writeFileSync(dir, file);
      return void console.log(`\n  Successfully wrote ${thereIsAFile ? 'new' : ''}tsconfig.json\n`);
    } catch (err: any) {
      console.log(err.message);
      return;
    }
  });

program.parse(process.argv);

type Type = 'react' | 'next' | 'browser' | 'node';
function select(type: Type, all: typeof assets) {
  if (all[type]) return all[type]();
  return all.fallback();
}
