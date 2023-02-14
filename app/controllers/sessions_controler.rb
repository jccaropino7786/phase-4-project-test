class SessionsController < ApplicationController
    
    
    def create
        @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(parmas[:user][:password])
            session[:user_id] = @user.user_id
            redirect_to user_path(@user)            
        else
            redirect_to new_session
        end
    end
end