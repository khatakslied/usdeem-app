class RemoveWorkEthicFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :work_ethic, :string
  end
end
