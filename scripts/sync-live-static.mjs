import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const distDir = join(repoRoot, 'dist');
const distAssetsDir = join(distDir, 'assets');
const publicImagesDir = join(repoRoot, 'public', 'images');
const rootAssetsDir = join(repoRoot, 'assets');
const rootImagesDir = join(repoRoot, 'images');

function ensureDir(path) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

function emptyDir(path) {
  ensureDir(path);
  for (const name of readdirSync(path)) {
    rmSync(join(path, name), { recursive: true, force: true });
  }
}

ensureDir(rootAssetsDir);
ensureDir(rootImagesDir);

const distIndexPath = join(distDir, 'index.html');
const rootIndexPath = join(repoRoot, 'index.html');

writeFileSync(rootIndexPath, readFileSync(distIndexPath, 'utf8'));

emptyDir(rootAssetsDir);
cpSync(distAssetsDir, rootAssetsDir, { recursive: true });

emptyDir(rootImagesDir);
cpSync(publicImagesDir, rootImagesDir, { recursive: true });

console.log('Synced root static files from dist and public/images.');
