# res-lenses

- Link to the live page here: [https://res-lenses.resilientdb.com/](https://res-lenses.resilientdb.com/)
- Link to backend repo: [https://github.com/ResilientApp/ReLensesBackend](https://github.com/ResilientApp/ReLensesBackend)

## Run the site locally

- Have Node installed
- 'npm install --save three'
- 'npm install --save-dev vite'
- 'npm install'
- To run: 'npx vite'
- To build (for when hosting): 'npm run build'

## Updating the links for your backend

By default the backend will fetch from endpoints the resilientDB cloud. To switch to your own custom backend:
- Go to '/js/dashboard.js'
- At the top replace the string in 'resDBLink' and 'ethLink' with your endpoints. If running locally, its probably going to be the two links above that are commented out.