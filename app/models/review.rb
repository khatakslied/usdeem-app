class Review < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  validates :teamwork, presence: true
  validates :communication, presence: true
  validates :time_management, presence: true
  validates :problem_solving, presence: true
  validates :leadership, presence: true
  validates :work_ethic, presence: true
end
