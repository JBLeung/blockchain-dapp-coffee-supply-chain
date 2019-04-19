contract-build:
	docker-compose run --rm dapp-solidity npm run build
contract-test:
	docker-compose run --rm dapp-solidity npm run test
contract-deploy:
	docker-compose run --rm dapp-solidity npm run deploy
start:
	docker-compose up dapp-app
down:
	docker-compose down