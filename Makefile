PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash
PROJECT = "Full stack project"

.PHONY: clean build_server build_c_prd build_c_staging build deploy start

clean_public:
	rm -rf ./_public && mkdir ./_public

clean_lib:
	rm -rf ./_lib && mkdir ./_lib

build_server: clean_lib
	babel app -d _lib && babel server -d _lib/server

build_c_prd: clean_public
	NODE_ENV=production webpack --progress --colors --config webpack.prod.config.js

build_c_staging: clean_public
	NODE_ENV=development webpack --progress --colors --config webpack.config.js

build: build_c_prd build_server

start:
	NODE_PATH=$NODE_PATH:./_lib node ./bootstrap.js

server: build_server start

deploy: build start
