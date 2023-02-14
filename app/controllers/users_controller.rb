class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]
    skip_before_action :authorized_user, only: [:create]
    
    def show
        render json: @user, status: :ok
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
