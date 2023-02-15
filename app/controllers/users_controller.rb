class UsersController < ApplicationController
    before_action :find_user, only: [ :update, :destroy]
    # skip_before_action :authorized_user, only: [:create]

    def index
        render json: User.all, status: :ok
    end
    
    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def update
        render json: @user.update!(user_params), status: :ok
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :password)
    end
end
