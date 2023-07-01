# Create Development database
RAILS_ENV=development rails db:create

# Test database
RAILS_ENV=test rails db:test:prepare

# Exec Development migrations
RAILS_ENV=development rails db:migrate
