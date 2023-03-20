import { exec } from 'node:child_process';
import { unlink, writeFile, readdir, access } from 'node:fs/promises';

const COMPONENTS_DIR = '../components';
const DESTINATION = '../components/index.ts';

const generateIndexFile = async (COMPONENTS_DIR) => {
  const components = await readdir(COMPONENTS_DIR);
  const componentsIgnore = ['Shadow', 'FontSize', 'Siux'];
  return components
    .filter((item) => /^[A-Z][^.]*$/.test(item))
    .filter((item) => {
      console.log(item, componentsIgnore.indexOf(item));
      return componentsIgnore.indexOf(item) === -1;
    })
    .reduce(
      (acum, current) =>
        `${acum}
export { ${current} } from './${current}/${current}'`,
      '',
    );
};

const main = async () => {
  const exists = await access(DESTINATION)
    .then(() => true)
    .catch(() => false);

  if (exists) await unlink(DESTINATION);

  const finalIndexFile = await generateIndexFile(COMPONENTS_DIR);
  await writeFile(DESTINATION, finalIndexFile);
  exec(`prettier --write "${DESTINATION}"`);
};

main();
