class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @user = current_user
    # @last_month_reports = Report.where(recipient: current_user,
    #                                    created_at: Date.today.beginning_of_month..Date.today.end_of_month)
    #                             .includes(:key_traits).as_json(include: [key_traits: { include: [skill_groups: { include: :skills }] }])
    # render json: @last_month_reports, include: [key_traits: { include: [skill_groups: { include: :skills }] }]
  end
end
