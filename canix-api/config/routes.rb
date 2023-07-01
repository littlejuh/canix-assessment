# frozen_string_literal: true

Rails.application.routes.draw do
  scope module: 'api', path: '/api' do
    post 'imports/:id/weighins', to: 'imports#create_weigh_in', as: :imports_create_weighin
    get 'imports/:id/weighins', to: 'imports#show_weigh_in', as: :imports_show_weighin
  end
end
