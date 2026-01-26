.PONY: install brain-games lint publish

install: #
	npm ci

brain-games: # запустить приложение
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint: 
	npx eslint