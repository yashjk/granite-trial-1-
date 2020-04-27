class SessionsController < ApplicationController
  def new
    render
  end

  def create
    user = User.find_by(email: params[:login][:email].downcase)
    if user && user.authenticate(params[:login][:password])
      session[:user_id] = user.id.to_s
      flash[:success] = "Successfully logged in!"

      render status: :ok, json: { notice: 'Successfully logged in' }
    else
      render status: :not_found, json: { notice: 'Invalid credentials, try again' }
    end
  end

  def destroy
    session.delete(:user_id)
    flash[:warning] = "Logged out!"
  end
  
end
