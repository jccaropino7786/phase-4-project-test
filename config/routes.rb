Rails.application.routes.draw do
  
  resources :project_materials
  resources :materials
  resources :projects
  resources :users, except: [:create, :show]
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  post "/logout", to: "sessions#logout"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
