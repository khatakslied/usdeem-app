class CreateSubTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :sub_traits do |t|
      t.integer :score
      t.string :category
      t.references :key_trait, null: false, foreign_key: true

      t.timestamps
    end
  end
end
