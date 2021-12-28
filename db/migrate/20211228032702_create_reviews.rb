class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :sender, null: false, index: true, foreign_key: { to_table: :users }
      t.references :recipient, null: false, index: true, foreign_key: { to_table: :users }
      t.string :teamwork
      t.string :communication
      t.string :time_management
      t.string :problem_solving
      t.string :leadership
      t.string :work_ethic

      t.timestamps
    end
  end
end
