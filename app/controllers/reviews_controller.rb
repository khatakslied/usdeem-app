class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(problem_solving: problem_solving_params)
    raise
  end

  private
  def problem_solving_params
    @analysis_skills = params.require(:problem_solving).permit(:analysis_skills_score, analysis_skills_subset: [])
    @creative_thinking_skills = params.require(:problem_solving).permit(:creative_thinking_skills_score, creative_thinking_skills_subset: [])
    @troubleshooting_skills = params.require(:problem_solving).permit(:troubleshooting_skills_score, troubleshooting_skills_subset: [])
    {
      analysis_skills: { score: @analysis_skills[:analysis_skills_score], subset: @analysis_skills[:analysis_skills_subset][1..-1] },
      creative_thinking_skills: { score: @creative_thinking_skills[:creative_thinking_skills_score], subset: @creative_thinking_skills[:creative_thinking_skills_subset][1..-1] },
      troubleshooting_skills: { score: @troubleshooting_skills[:troubleshooting_skills_score], subset: @troubleshooting_skills[:troubleshooting_skills_subset][1..-1] }
    }
  end
end

# “{
# Analysis: {score: 2, Analysis: true, Divergent_thinking: false, Experimenting: false, Observation: true },
# Creativity: {score: 3, Artistic_sense: true, Imagination: false, Brainstorming: true, Design: true, Design_sense: true, Innovation: true, Insight: true, Inspiration: false, Mind_mapping: true, Lateral_thinking: false},
# Troubleshooting: {score: 5, Troubleshooting: false, Questioning: false, Logical_reasoning: false, Persistence: false, Reframing: false}
# }”
