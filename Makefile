.PONY: install brain-games lint publish

install: #
	npm ci

brain-games: # запустить приложение
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint: 
	npx eslint