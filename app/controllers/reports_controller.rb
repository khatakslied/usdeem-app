class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
    @skills_data = data_parse
  end

  def create
    @skills_data = data_parse
    @report = Report.new(report_params)
    @report.sender = current_user
    if @report.save
      # raise
      redirect_to reports_path
    else
      render :new
    end
  end

  private

  def report_params
    params.require(:report).permit(:recipient_id, key_traits_attributes: [:category, skill_groups_attributes: [:category, :score, skills_attributes: [:name, :improve]]]
    )
  end

  def data_parse
    require "json"
    serialized_data = File.read("public/data_hash.json")
    return JSON.parse(serialized_data)
  end
end
