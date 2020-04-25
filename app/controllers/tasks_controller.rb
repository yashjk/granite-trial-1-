class TasksController < ApplicationController
  before_action :load_task, only: [:show, :edit, :update, :destroy]

  def index
    @tasks = Task.all
  end

  def new
    render
  end

  def create
    @task = Task.new(task_params)
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
      render status: :ok, json: { notice: "Successfully deleted task" }
    else
      render status: :unprocessable_entity, json: { errors: @task.errors.full_messages }
    end
  end
  
  private

  def task_params
    params.require(:task).permit(:description)
  end

  def load_task
    @task = Task.where(id: params[:id]).first
    unless @task
      flash[:alert] = "No such task in your records!"
      redirect_to controller: "tasks", action: "index"
    end
  end

end
