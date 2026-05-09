import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const distDir = join(repoRoot, 'dist');
const distAssetsDir = join(distDir, 'assets');
const publicImagesDir = join(repoRoot, 'public', 'images');
const publicDir = join(repoRoot, 'public');
const rootAssetsDir = join(repoRoot, 'assets');
const rootImagesDir = join(repoRoot, 'images');
const distDuyenExperienceDir = join(distDir, 'duyen-an-experience');
const rootDuyenExperienceDir = join(repoRoot, 'duyen-an-experience');

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

if (existsSync(distDuyenExperienceDir)) {
  cpSync(distDuyenExperienceDir, rootDuyenExperienceDir, { recursive: true });
}

for (const name of readdirSync(publicDir)) {
  if (name !== 'images') {
    cpSync(join(publicDir, name), join(repoRoot, name), { recursive: true });
  }
}

console.log('Synced root static files from dist and public.');
