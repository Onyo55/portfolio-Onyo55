Rails.application.routes.draw do
  get 'users/show'
  devise_for :users
  root to: "themes#index"
  resources :themes, only: [:index, :new, :create, :show, :destroy] do
    resources :comments, only: [:index, :create] 
    collection do
      get 'search'
    end
  end

end
