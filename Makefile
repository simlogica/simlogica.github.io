# Makefile

# List all non-file (make targets)
.PHONY: all run build

all:
	cat ./Makefile	

run:
	uv run mkdocs serve

build:
	uv run mkdocs build
