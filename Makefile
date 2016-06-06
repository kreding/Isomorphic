PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash
PROJECT = "Full stack project"

.PHONY: clean build_server build_c_prd build_c_staging build deploy start

clean:
	rm -rf ./_public ./_lib && mkdir ./_public && mkdir ./_lib

build_server:
	babel app -d _lib && babel server -d _lib/server

build_c_prd:
	NODE_ENV=production webpack --progress --colors --config webpack.prod.config.js

build_c_staging:
	NODE_ENV=development webpack --progress --colors --config webpack.config.js

build: clean build_c_prd build_server

start:
	NODE_PATH=$NODE_PATH:./_lib node ./bootstrap.js

deploy: build start
