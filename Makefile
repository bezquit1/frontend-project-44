.PONY: install brain-games

install: #
	npm ci

brain-games: # запустить приложение
	node bin/brain-games.js

publish:
	npm publish --dry-run