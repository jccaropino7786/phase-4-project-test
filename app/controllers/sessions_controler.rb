class SessionsController < ApplicationController
    
    
    def create
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(parmas[:email][:password])
            session[:user_id] = @user.user_id
            redirect_to user_path(@user)            
        else
            redirect_to new_session
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end