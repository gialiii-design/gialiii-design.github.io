import {mkdir, readdir, rename} from 'node:fs/promises';
import {join, relative, resolve, sep} from 'node:path';

const root = resolve('dist/client');

async function collectHtml(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name.endsWith('.html') && !['index.html', '404.html'].includes(entry.name)) files.push(path);
  }

  return files;
}

for (const source of await collectHtml(root)) {
  const pagePath = source.slice(0, -'.html'.length);
  await mkdir(pagePath, {recursive: true});
  await rename(source, join(pagePath, 'index.html'));
  console.log(`Prepared /${relative(root, pagePath).split(sep).join('/')}/`);
}
