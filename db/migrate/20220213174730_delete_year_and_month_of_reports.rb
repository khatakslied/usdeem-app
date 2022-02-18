class DeleteYearAndMonthOfReports < ActiveRecord::Migration[6.0]
  def change
    remove_column :reports, :year
    remove_column :reports, :month
  end
end
