class TaskPolicy
  attr_reader :user, :task

  def initialize(user, task)
    @user = user
    @task = task
  end

  def show?
    task.creator_id == user.id || task.asignee_id == user.id
  end

  def edit?
    show?
  end

  def update?
    show?
  end

  def create?
    true
  end

  def destroy?
    task.creator_id == user.id
  end
  
end