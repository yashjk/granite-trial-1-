class User < ApplicationRecord
  has_many :tasks, dependent: :destroy, foreign_key: :assignee_id
  has_many :comments, dependent: :destroy
  validates :name, presence: true, uniqueness: true
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
