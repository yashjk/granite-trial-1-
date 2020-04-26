Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :tasks, only: [:index, :new, :create, :show, :edit, :update, :destroy]

  root to: 'users#new'

  resources :users, only: [:new, :create]

end
