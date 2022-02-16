class Report < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  has_many :key_traits, dependent: :destroy
  accepts_nested_attributes_for :key_traits
end
