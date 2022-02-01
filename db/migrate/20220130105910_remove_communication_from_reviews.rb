class RemoveCommunicationFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :communication, :string
  end
end
