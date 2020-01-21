install: install-deps
install-deps:
	npm install
run:
	npx babel-node 'src/bin/brain-games.js'
publish:
	npm publish --dry-run
lint:
	npx eslint
build:
	npm run build
