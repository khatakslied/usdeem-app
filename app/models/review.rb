class Review < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  validates :teamwork, presence: true
  validates :communication, presence: true
  validates :time_management, presence: true
  validates :problem_solving, presence: true
  validates :leadership, presence: true
  validates :work_ethic, presence: true

  # Problem Solving Skills
  ANALYSIS_SKILLS = %w[Divergent_thinking Experimentation Observation]
  CREATIVE_THINKING_SKILLS = %w[Artistic_sense Imagination Brainstorming Design_sense Innovation Insight Mind_mapping Lateral_thinking]
  TROUBLESHOOTING_SKILLS = %w[Troubleshooting Questioning Logical_reasoning Persistence Reframing]
end

# “{
# Analysis: {score: 2, Analysis: true, Divergent_thinking: false, Experimenting: false, Observation: true },
# Creativity: {score: 3, Artistic_sense: true, Imagination: false, Brainstorming: true, Design: true, Design_sense: true, Innovation: true, Insight: true, Inspiration: false, Mind_mapping: true, Lateral_thinking: false},
# Troubleshooting: {score: 5, Troubleshooting: false, Questioning: false, Logical_reasoning: false, Persistence: false, Reframing: false}
# }”
