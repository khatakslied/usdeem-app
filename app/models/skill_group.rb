class SkillGroup < ApplicationRecord
  belongs_to :key_trait
  has_many :skills, dependent: :destroy
  accepts_nested_attributes_for :skills
  validates :score, presence: true
  validates :score, inclusion: { in: 1..5 }
  validates :category, presence: true
  # CATEGORIES = {
  #   teamwork: ["Conflict Resolution Skills", "Collaborative Skills", "Cultural Awareness", "Empathetic Skills"],
  #   problem_solving: ["Analysis Skills", "Creative Thinking Skills", "Troubleshooting Skills"],
  #   leadership: ["Team Management Skills", "Project Management Skills", "Interpersonal Skills"],
  #   work_ethic: ["Adaptability", "Diligence", "Discipline", "Responsibility"],
  #   communication: ["General Communication Skills", "Negotiation Skills", "Diplomatic Skills"],
  #   time_management: ["Planning Skills", "Prioritisation Skills", "Long Term Performance"]
  # }
end
