class TasksController < ApplicationController
  before_action :load_task, only: [:show, :edit, :update, :destroy]
  before_action :ensure_user_logged_in

  def index
    @tasks = Task.all
  end

  def new
    render
  end

  def create
    @user = User.find(task_params[:assignee_id])
    @task = @user.tasks.new(task_params)
    @task.creator_id = @current_user.id
    if @task.save
      flash[:success] = "Task was successfully created"
      render status: :ok, json: { notice: 'Task was successfully created', id: @task.id }
    else
      render status: :unprocessable_entity, json: { error: @task.errors.full_messages }
    end
  end

  def show
    render
  end

  def edit
    render
  end

  def update
    if @task.update_attributes(task_params)
      flash[:success] = "Successfully updated task."
      render status: :ok, json: { notice: "Successfully updated task." }
    else
      render status: :unprocessable_entity, json: { errors: @task.errors.full_messages }
    end
  end

  def destroy
    if @task.destroy
      flash[:success] = "Task successfully deleted."
      render status: :ok, json: { notice: "Successfully deleted task" }
    else
      render status: :unprocessable_entity, json: { errors: @task.errors.full_messages }
    end
  end

  private

  def task_params
    params.require(:task).permit(:description, :assignee_id)
  end

  def load_task
    @task = Task.where(id: params[:id]).first
    unless @task
      flash[:alert] = "No such task in your records!"
      redirect_to controller: "tasks", action: "index"
    end
  end

  def load_user
    begin
      @user = User.find(task_params[:assignee_id])
    rescue ActiveRecord::RecordNotFound
      flash[:alert] = "No such user found!"
    end
  end


end
