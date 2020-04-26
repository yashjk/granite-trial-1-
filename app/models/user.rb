class User < ApplicationRecord
  has_many :tasks, dependent: :destroy, foreign_key: :assignee_id
  validates :name, presence: true, uniqueness: true
end
