class CreateKeyTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :key_traits do |t|

      t.timestamps
    end
  end
end
