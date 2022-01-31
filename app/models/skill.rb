class Skill < ApplicationRecord
  belongs_to :skill_group

  # Teamwork Skills
  CONFLICT_RESOLUTION_SKILLS = ["Coordination", "Dealing with Difficult Situations", "Mediation", "Office Politics Management", "Personality Conflicts Management"]
  COLLABORATIVE_SKILLS = ["Accepting Feedback", "Cooperation", "Idea Exchange", "Influencing Others", "Sales Skills", "Social Skills"]
  CULTURAL_AWARENESS = ["Disability Awareness", "Diversity Awareness", "Intercultural Competence"]
  EMPATHETIC_SKILLS = ["Emotional Intelligence", "Interpersonal Skills", "Respectfulness", "Self-Awareness"]

  # Problem Solving Skills
  ANALYSIS_SKILLS = ["Divergent Thinking", "Experimentation", "Observation"]
  CREATIVE_THINKING_SKILLS = ["Artistic Sense", "Imagination", "Brainstorming Ability", "Design Sense", "Innovation", "Insight", "Mind Mapping", "Lateral Thinking"]
  TROUBLESHOOTING_SKILLS = ["Troubleshooting", "Questioning", "Logical Reasoning", "Persistence", "Reframing"]

  # Leadership Skills
  TEAM_MANAGEMENT_SKILLS = ["People Management", "Remote Team Management", "Talent Management", "Virtual Team Management", "Team-Building", "Coaching", "Supervising", "Delegation", "Mentoring", "Facilitation", "Cultural Intelligence", "Dispute Management"]
  PROJECT_MANAGEMENT_SKILLS = ["Project Management", "Meeting Management", "Agility", "Deal-Making", "Decision-Making", "Strategic Planning"]
  INTERPERSONAL_SKILLS = ["Encouragement", "Generosity", "Humility", "Inspiring", "Selflessness", "Authenticity", "Versatility", "Clear with Feedback", "Managing Difficult Conversations"]

  # Work Ethic
  ADAPTABILITY = ["Initiative", "Motivatation", "Open-Minded", "Optimism", "Taking Criticism", "Tolerance of Change and Uncertainty", "Trainability"]
  DILIGENCE = ["Attention", "Competitiveness", "Curiosity", "Organisation", "Perseverance", "Results-Orientation"]
  DISCIPLINE = ["Level-headedness", "Commitment", "Emotion Management", "Independence", "Professionalism", "Punctuality", "Resilience"]
  RESPONSIBILITY = ["Dependability", "Integrity", "Reliability"]

  # Communication Skills
  GENERAL_COMMUNICATION_SKILLS = ["Verbal Communication", "Non-verbal Communication", "Visual Communication", "Written Communication", "Active Listening", "Clarity", "Confidence", "Interviewing"]
  NEGOTIATION_SKILLS = ["Negotiation", "Personal Branding", "Persuasion", "Presentation Skills", "Public Speaking", "Story Telling"]
  DIPLOMATIC_SKILLS = ["Diplomacy", "Empathy", "Friendliness", "Humor", "Networking", "Patience", "Positive Reinforcement", "Sensitivity", "Tolerance"]

  # Time Management Skills
  PLANNING_SKILLS = ["Allocating Eesources", "Goal-setting", "Organisation", "Personal Time Management", "Scheduling", "Task Planning", "Time Awareness"]
  PRIORITISATION_SKILLS = ["Task Prioritisation", "Sense of Urgency", "Streamlining"]
  PERFORMANCE = ["Acuity", "Coping with Workload", "Focus", "Introspection", "Memory", "Recall", "Stress Management", "Work-life Balance"]

end
