class Task < ApplicationRecord
  belongs_to :user, foreign_key: :assignee_id
  validates :description, presence: true
end