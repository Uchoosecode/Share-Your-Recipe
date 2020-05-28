Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :recipes
      resources :chefs do
        resources :recipes
        # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      end
    end
  end
    
end
