class KeyTrait < ApplicationRecord
  belongs_to :report
  has_many :skill_groups
  accepts_nested_attributes_for :skill_groups
  CATEGORIES = ["teamwork", "communication", "time management", "problem solving", "leadership", "work ethic"]
end
