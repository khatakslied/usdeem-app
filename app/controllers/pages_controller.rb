class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @user = current_user
    @last_month_reports = Report.where(recipient: current_user,
                                       created_at: Date.today.beginning_of_month..Date.today.end_of_month)
  end
end
