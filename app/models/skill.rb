class Skill < ApplicationRecord
  belongs_to :skill_group
  CATEGORIES = {
  # Teamwork Skills
  conflict_resolution_skills: ["Coordination", "Dealing with Difficult Situations", "Mediation", "Office Politics Management", "Personality Conflicts Management"],
  collaborative_skills: ["Accepting Feedback", "Cooperation", "Idea Exchange", "Influencing Others", "Sales Skills", "Social Skills"],
  cultural_awareness: ["Disability Awareness", "Diversity Awareness", "Intercultural Competence"],
  empathetic_skills: ["Emotional Intelligence", "Interpersonal Skills", "Respectfulness", "Self-Awareness"],
  # Problem Solving Skills
  analysis_skills: ["Divergent Thinking", "Experimentation", "Observation"],
  creative_thinking_skills: ["Artistic Sense", "Imagination", "Brainstorming Ability", "Design Sense", "Innovation", "Insight", "Mind Mapping", "Lateral Thinking"],
  troubleshooting_skills: ["Troubleshooting", "Questioning", "Logical Reasoning", "Persistence", "Reframing"],
  # Leadership Skills
  team_management_skills: ["People Management", "Remote Team Management", "Talent Management", "Virtual Team Management", "Team-Building", "Coaching", "Supervising", "Delegation", "Mentoring", "Facilitation", "Cultural Intelligence", "Dispute Management"],
  project_management_skills: ["Project Management", "Meeting Management", "Agility", "Deal-Making", "Decision-Making", "Strategic Planning"],
  interpersonal_skills: ["Encouragement", "Generosity", "Humility", "Inspiring", "Selflessness", "Authenticity", "Versatility", "Clear with Feedback", "Managing Difficult Conversations"],
  # Work Ethic
  adaptability: ["Initiative", "Motivatation", "Open-Minded", "Optimism", "Taking Criticism", "Tolerance of Change and Uncertainty", "Trainability"],
  diligence: ["Attention", "Competitiveness", "Curiosity", "Organisation", "Perseverance", "Results-Orientation"],
  discipline: ["Level-headedness", "Commitment", "Emotion Management", "Independence", "Professionalism", "Punctuality", "Resilience"],
  responsibility: ["Dependability", "Integrity", "Reliability"],
  # Communication Skills
  general_communication_skills: ["Verbal Communication", "Non-verbal Communication", "Visual Communication", "Written Communication", "Active Listening", "Clarity", "Confidence", "Interviewing"],
  negotiation_skills: ["Negotiation", "Personal Branding", "Persuasion", "Presentation Skills", "Public Speaking", "Story Telling"],
  diplomatic_skills: ["Diplomacy", "Empathy", "Friendliness", "Humor", "Networking", "Patience", "Positive Reinforcement", "Sensitivity", "Tolerance"],
  # Time Management Skills
  planning_skills: ["Allocating Eesources", "Goal-setting", "Organisation", "Personal Time Management", "Scheduling", "Task Planning", "Time Awareness"],
  prioritisation_skills: ["Task Prioritisation", "Sense of Urgency", "Streamlining"],
  long_term_performance: ["Acuity", "Coping with Workload", "Focus", "Introspection", "Memory", "Recall", "Stress Management", "Work-life Balance"]
  }
end
