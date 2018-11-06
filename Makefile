clean:
	rm -fr build

build:
	npm run build --files index.js package.json common/**/* public/**/*
