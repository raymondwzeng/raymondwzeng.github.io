//Source: https://www.devsamples.com/javascript/svelte/deploy-svelte-app-gh-pages

var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/raymondwzeng/raymondwzeng.github.io.git', 
        user: {
            name: 'raymondwzeng', 
            email: 'macandswissbusiness@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)