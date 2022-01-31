class SkillGroup < ApplicationRecord
  belongs_to :key_trait
  has_many :skills
  accepts_nested_attributes_for :skills
  CATEGORIES = {
    teamwork: ["Conflict Resolution Skills", "Collaborative Skills", "Cultural Awareness", "Empathetic Skills"],
    problem_solving: ["Analysis Skills", "Creative Thinking Skills", "Troubleshooting Skills"],
    leadership: ["Team Management Skills", "Project Management Skills", "Interpersonal Skills"],
    work_ethic: ["Adaptability", "Diligence", "Discipline", "Responsibility"],
    communication: ["General Communcation Skills", "Negotiation Skills", "Diplomatic Skills"],
    time_management: ["Planning Skills", "Prioritisation", "Performance"]
  }
end
