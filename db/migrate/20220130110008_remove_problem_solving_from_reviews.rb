class RemoveProblemSolvingFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :problem_solving, :string
  end
end
