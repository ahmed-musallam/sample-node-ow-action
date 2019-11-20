Sample OpenWhisk Nodejs Action

# Local OpenWhisk For development
1. `git clone git@github.com:apache/openwhisk-devtools.git`
2. `cd docker-compose`
3. follow the [OpenWhisk Docker Compose Docs](https://github.com/apache/openwhisk-devtools/tree/master/docker-compose)
	
	>Be sure to install docker, docker compose and java 8 as advised.
4. Run the `make quick-start` command, this will get all the OpenWisk images we need running, might take a couple minutes to finish.


# Building and Deploying this action
1. Clone this repo
2. `npm install` (within the repo)
3. `npm run build`: bundles index.js including all required dependecies into `dist/index.js`.
4. `npm run deploy`: deploys the action (from `dist/index`) to the OpenWhisk instance from the local setup above
5. `npm run invoke`: invokes the action after successful deployment
6. If you make updates to the action, or want to deploy it again, use `npm run update` (instead of `deploy`)