const fs = require('fs');
const globby = require('globby');

// get current file path, relative to directory that the script is run from
const currentFileRelative = () => {
  // based off of http://stackoverflow.com/a/31856198/358804
  return __filename.slice(process.cwd().length + 1);
};

// attempt to match the files that JSHint is checking
const getJSHintFiles = () => {
  let patterns = fs.readFileSync('.jshintignore').toString().split("\n");
  patterns = patterns.filter(pattern => { return !!pattern; });
  // exclude empty
  patterns = patterns.map(pattern => { return `!${pattern}`; });
  const currentFile = currentFileRelative();
  patterns.unshift('*.html', '*.js', `!${currentFile}`);

  return patterns;
};

const matchAjax = /((\$|jQuery)\.(ajax|get(JSON|Script)?)|new XMLHttpRequest)\(/;

const isAjaxCalled = (source) => {
  return matchAjax.test(source);
};

const patterns = getJSHintFiles();

globby(patterns).then(paths => {
  const ajaxFound = paths.some(path => {
    const contents = fs.readFileSync(path).toString();
    return isAjaxCalled(contents);
  });

  if (ajaxFound) {
    console.log("AJAX call found!");
  } else {
    console.error("ERROR: No use of AJAX found.");
    process.exit(1);
  }
}).catch(e => {
  console.error(e);
  process.exit(1);
});
