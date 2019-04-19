up:
	docker-compose up dapp-coffee-supply-chain
build:
	docker-compose up --build --force-recreate dapp-coffee-supply-chain
sh:
	docker-compose exec dapp-coffee-supply-chain sh
stop:
	docker-compose stop dapp-coffee-supply-chain
down:
	docker-compose down