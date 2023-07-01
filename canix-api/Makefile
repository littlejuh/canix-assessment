DOCKER_DOWN=docker-compose down
DOCKER_UP=docker-compose up --remove-orphans -d
build:
	bundle install
lint:
	bundle exec rubocop -a
test:
	bundle exec rspec
start-db:
	$(DOCKER_DOWN)
	$(DOCKER_UP)
start:
	@echo '*** Starting app in 3001 port ***'
	bundle exec rails s -p 3001
setup-db:
	 ./run_db.sh
setup-infra: 
	make start-db
	./wait-for-db.sh localhost 5432 make setup-db
first-time-run: 
	make setup-infra && make start

