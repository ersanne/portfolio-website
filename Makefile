.PHONY: install dev build preview lint test test-watch clean

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Production build
	npm run build

build-dev: ## Development build
	npm run build:dev

preview: ## Preview production build
	npm run preview

lint: ## Run ESLint
	npm run lint

test: ## Run tests
	npm run test

test-watch: ## Run tests in watch mode
	npm run test:watch

portrait: ## Convert originals/portrait.jpg → src/assets/erik-portrait.webp
	@command -v cwebp >/dev/null 2>&1 || { echo "Install cwebp: brew install webp"; exit 1; }
	cwebp -q 85 originals/portrait.jpg -o src/assets/erik-portrait.webp
	@echo "✓ Portrait updated (originals/portrait.jpg → src/assets/erik-portrait.webp)"

deploy: build ## Build and deploy to GitHub Pages
	npx gh-pages -d dist

clean: ## Remove build artifacts and node_modules
	rm -rf dist node_modules

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
