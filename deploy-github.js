const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/shishirccr/shishirccr.github.io.git',
  },
  () => {
    //console.log('Deploy Complete!');
  },
);
