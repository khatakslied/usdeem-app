class KeyTrait < ApplicationRecord
  belongs_to :report
  CATEGORIES = ["teamwork", "communication", "time_management", "problem_solving", "leadership", "work_ethic"]

    # Teamwork Skills
  CONFLICT_RESOLUTION_SKILLS = %w[Coordination Dealing_with_Difficult_Situations Mediation Office_Politics_Management Personality_Conflicts_Management]
  COLLABORATIVE_SKILLS = %w[Accepting_Feedback Cooperation Idea_Exchange Influential Sales_Skills Social_Skills]
  CULTURAL_AWARENESS = %w[Disability_Awareness Diversity_Awareness Intercultural_Competence]
  EMPATHETIC_SKILLS = %w[Emotional_Intelligence Interpersonal_Skills Respectfulness Self-Awareness]

  # Problem Solving Skills
  ANALYSIS_SKILLS = %w[Divergent_Thinking Experimentation Observation]
  CREATIVE_THINKING_SKILLS = %w[Artistic_Sense Imagination Brainstorming Design_Sense Innovation Insight Mind_Mapping Lateral_Thinking]
  TROUBLESHOOTING_SKILLS = %w[Troubleshooting Questioning Logical_Reasoning Persistence Reframing]

  # :teamwork, :communication, :time_management, :problem_solving, :leadership, :work_ethic
end
