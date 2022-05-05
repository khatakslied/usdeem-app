class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @user = current_user
    @all_reports = Report.all
    @company_last_six_months_reports = Report.where(created_at: 5.months.ago.beginning_of_month..Date.today.end_of_month)
    .as_json(include: [key_traits: { include: [skill_groups: { include: :skills }] }])
    @user_reports = Report.where(recipient: current_user)
    @last_month_reports = Report.where(recipient: current_user,
                                        created_at: Date.today.beginning_of_month..Date.today.end_of_month).as_json(include: [key_traits: { include: [skill_groups: { include: :skills }] }])
                                        # .includes(:key_traits).as_json(include: [key_traits: { include: [skill_groups: { include: :skills }] }])
    @last_six_months_reports = Report.where(recipient: current_user,
                                        created_at: 5.months.ago.beginning_of_month..Date.today.end_of_month).as_json(include: [key_traits: { include: [skill_groups: { include: :skills }] }])
    # render json: @last_month_reports, include: [key_traits: { include: [skill_groups: { include: :skills }] }]
  end
end
