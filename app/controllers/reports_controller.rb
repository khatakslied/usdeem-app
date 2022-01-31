class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
  end

  def create
    @report = Report.new(sender_id: current_user)
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
