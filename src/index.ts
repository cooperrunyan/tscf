#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import normal from './asset.js';

const program = new Command('tscf');

program
  .option('-l,--log')
  .option('-f,--folder <folder>')
  .description('Writes a tsconfig file')
  .action((args: Record<string, any>) => {
    try {
      const file = normal();

      if (args.log) void process.stdout.write(file);

      const thereIsAFile = fs.existsSync(path.resolve('.', args.folder ? args.folder + '/' : '' + 'tsconfig.json'));

      const dir = path.resolve('.', (args.folder ? args.folder + '/' : '') + (thereIsAFile ? 'new' : '') + 'tsconfig.json');

      fs.writeFileSync(dir, file);
      void console.log('Successfully wrote tsconfig.json');
    } catch (err: any) {
      console.log(err.message);
    }
  });

program.parse(process.argv);
