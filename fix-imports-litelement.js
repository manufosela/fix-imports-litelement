#!/usr/bin/env node

const { readFileSync, writeFileSync, readdirSync, statSync } = require('fs');
const { extname, join } = require('path');

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());
const dirBase = './node_modules';
const d = dirs(dirBase);

d.forEach( folder => {
  console.log(folder,'\n----------------');
  readdirSync(dirBase+'/'+folder).forEach(file => {
    let extension = extname(file);
    if ( extension === ".js" ) {
      let pathfile = dirBase+'/'+folder+'/'+file;
      let content = readFileSync(pathfile, 'utf8');
      let fixedContent = content.replace(/from '(lit-html)';/gm,"from '../$1/$1.js';");
      fixedContent = fixedContent.replace(/from '(lit-html)(.*\.js)?';/gm,"from '../$1$2';");
      if ( fixedContent !== content) {
        writeFileSync(pathfile, fixedContent);
        console.log('fixed ' + file);
      } else {
        console.log('nothing to do');
      }
    }
  });
  console.log('');
});