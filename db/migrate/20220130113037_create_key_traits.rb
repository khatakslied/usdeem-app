class CreateKeyTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :key_traits do |t|
      t.string :category
      t.references :report, null: false, foreign_key: true

      t.timestamps
    end
  end
end
