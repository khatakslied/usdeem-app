class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
  end

  def create
    @report = Report.new(report_params)
    @report.sender = current_user
    # if @report.save
    #   KeyTrait::CATEGORIES.each do |category|
    #     @key_trait = KeyTrait.new()
    #     if key_trait.save

    #     end
    #   end
    #   redirect_to reports_path
    # else
    #   render :new
    # end
    raise
  end

  private

  def report_params
    params.require(:report).permit(:recipient_id)
  end
end
