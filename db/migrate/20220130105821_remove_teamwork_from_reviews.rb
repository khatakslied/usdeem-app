class RemoveTeamworkFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :teamwork, :string
  end
end
