class SkillGroup < ApplicationRecord
  belongs_to :key_trait
  has_many :skills


end
