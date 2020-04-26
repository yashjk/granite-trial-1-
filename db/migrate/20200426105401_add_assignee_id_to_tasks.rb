class AddAssigneeIdToTasks < ActiveRecord::Migration[6.0]
  def change
    add_columns :tasks, :assignee_id, :integer
  end
end
