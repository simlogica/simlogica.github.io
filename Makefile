# Makefile

# List all non-file (make targets)
.PHONY: all run

all:
	cat ./Makefile	

run:
	uv run mkdocs serve