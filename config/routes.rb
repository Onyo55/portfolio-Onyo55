Rails.application.routes.draw do
  devise_for :users
  root to: "themes#index"
  resources :themes, only: [:index, :new, :create, :show] do
    resources :comments, only: [:index, :create]
  end
end
