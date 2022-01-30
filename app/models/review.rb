class Review < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  validates :teamwork, presence: true
  validates :communication, presence: true
  validates :time_management, presence: true
  validates :problem_solving, presence: true
  validates :leadership, presence: true
  validates :work_ethic, presence: true

  # Teamwork Skills
  CONFLICT_RESOLUTION_SKILLS = %w[Coordination Dealing_with_Difficult_Situations Mediation Office_Politics_Management Personality_Conflicts_Management]
  COLLABORATIVE_SKILLS = %w[Accepting_Feedback Cooperation Idea_Exchange Influential Sales_Skills Social_Skills]
  CULTURAL_AWARENESS = %w[Disability_Awareness Diversity_Awareness Intercultural_Competence]
  EMPATHETIC_SKILLS = %w[Emotional_Intelligence Interpersonal_Skills Respectfulness Self-Awareness]

  # Problem Solving Skills
  ANALYSIS_SKILLS = %w[Divergent_Thinking Experimentation Observation]
  CREATIVE_THINKING_SKILLS = %w[Artistic_Sense Imagination Brainstorming Design_Sense Innovation Insight Mind_Mapping Lateral_Thinking]
  TROUBLESHOOTING_SKILLS = %w[Troubleshooting Questioning Logical_Reasoning Persistence Reframing]
end

# “{
# Analysis: {score: 2, Analysis: true, Divergent_thinking: false, Experimenting: false, Observation: true },
# Creativity: {score: 3, Artistic_sense: true, Imagination: false, Brainstorming: true, Design: true, Design_sense: true, Innovation: true, Insight: true, Inspiration: false, Mind_mapping: true, Lateral_thinking: false},
# Troubleshooting: {score: 5, Troubleshooting: false, Questioning: false, Logical_reasoning: false, Persistence: false, Reframing: false}
# }”
