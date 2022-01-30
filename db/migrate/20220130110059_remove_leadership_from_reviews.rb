class RemoveLeadershipFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :leadership, :string
  end
end
