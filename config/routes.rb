Rails.application.routes.draw do
  
  resources :project_materials
  resources :materials
  resources :projects
  resources :users
  post "/login", to: "sessions#login"
  get "/auth", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
