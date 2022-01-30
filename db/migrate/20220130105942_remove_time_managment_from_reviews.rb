class RemoveTimeManagmentFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :time_management, :string
  end
end
